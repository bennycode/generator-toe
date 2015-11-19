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
    var extension = path.extname(filepath).substr(1);
    if (extension === 'scss') {
      extension = 'sass';
    }
    var task = undefined;

    // Example: src/main/coffee/MyClass.coffee
    if (directories.length > 3) {
      var type = directories[1];      // Values: "main" or "test"
      var language = directories[2];  // Values: "js", "coffee", "less", etc.
      var task = 'build_' + type + '_' + language;

      switch (extension) {
        case 'coffee':
        case 'less':
        case 'scss':
          // Read config
          var currentConfig = grunt.config([extension, task, 'files']);
          var currentWorkingDirectory = currentConfig[0]['cwd'];

          // Adjust config
          grunt.log.writeln('Old config for "' + task + '": ' + JSON.stringify(currentConfig));
          currentConfig[0]['src'] = filepath.replace(/\\/g, '/').replace(currentWorkingDirectory + '/', '');
          grunt.log.writeln('New config for "' + task + '": ' + JSON.stringify(currentConfig));

          // Apply config
          grunt.config([extension, task, 'files'], currentConfig);
          break;
      }
    }
  });

  // Initialization
  grunt.loadTasks('./conf/grunt/tasks');
};
