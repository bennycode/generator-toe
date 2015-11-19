module.exports = function (grunt) {
  // Dependencies
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
  });

  var path = require('path');

  // Helper functions
  function concatenateFiles(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function (option) {
      key = option.replace(/\.js$/, '');
      object[key] = require(path + option);
    });

    return object;
  }

  // Configuration
  var config = {
    dir: grunt.file.readJSON('./conf/grunt/globals/dir.json'),
    pkg: grunt.file.readJSON('package.json'),
    server: grunt.file.readJSON('./conf/grunt/globals/server.json')
  };
  grunt.util._.extend(config, concatenateFiles('./conf/grunt/options/'));
  grunt.initConfig(config);

  grunt.config('script', '<%= setup.scriptLanguage %>');
  grunt.config('style', '<%= setup.styleLanguage %>');

  // Events
  grunt.event.on('watch', function (action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);

    var directories = filepath.split(path.sep);
    var pureExtension = path.extname(filepath).substr(1);
    if (pureExtension === 'scss') {
      pureExtension = 'sass';
    }
    var task = undefined;

    // Example: src/main/coffee/MyClass.coffee
    if (directories.length > 3) {
      var code = directories[0];
      // TODO: Can be removed if all "source_" tasks have been renamed to "src"
      if (code === 'src') {
        code = 'source';
      }
      var type = directories[1];      // Can be: "main", "demo" or "test"
      var language = directories[2];  // Can be: "js", "coffee", "less", etc.

      var task = 'build_' + type + '_' + language;

      switch (pureExtension) {
        case 'coffee':
        case 'less':
        case 'scss':
          var currentConfig = grunt.config([pureExtension, task, 'files']);
          grunt.log.writeln('Old config for "' + task + '": ' + JSON.stringify(currentConfig));
          var currentWorkingDirectory = currentConfig[0]['cwd'];
          currentConfig[0]['src'] = filepath.replace(/\\/g, '/').replace(currentWorkingDirectory + '/', '');
          grunt.log.writeln('New config for "' + task + '": ' + JSON.stringify(currentConfig));
          grunt.config([pureExtension, task, 'files'], currentConfig);
          break;
      }
    }
  });

  // Initialization
  grunt.loadTasks('./conf/grunt/tasks');
};
