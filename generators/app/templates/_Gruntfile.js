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
    var extension = path.extname(filepath);
    var task = undefined;

    if (directories.length === 4) {
      var code = directories[0];
      var type = directories[1];
      var language = directories[2];

      if (code === 'src') {
        code = 'source';
      }

      task = [code, type, language].join('_');

      switch (extension) {
        case '.less':
        case '.scss':
          var pureExtension = extension.substr(1);
          if (pureExtension === 'scss') {
            pureExtension = 'sass';
          }
          task = 'build_' + type + '_' + language;
          var currentConfig = grunt.config([pureExtension, task, 'files']);
          grunt.log.writeln('Old config for "' + task + '": ' + JSON.stringify(currentConfig));
          var currentWorkingDirectory = currentConfig[0]['cwd'];
          currentConfig[0]['src'] = filepath.replace(/\\/g, '/').replace(currentWorkingDirectory + '/', '');
          grunt.log.writeln('New config for "' + task + '": ' + JSON.stringify(currentConfig));
          grunt.config([pureExtension, task, 'files'], currentConfig);
          break;
        case '.coffee':
          task = 'build_' + type + '_' + language;
          var currentConfig = grunt.config(['coffee', task]);
          grunt.log.writeln('Old config for "' + task + '": ' + JSON.stringify(currentConfig));
          var currentWorkingDirectory = currentConfig['cwd'];
          currentConfig['src'] = filepath.replace(/\\/g, '/').replace(currentWorkingDirectory + '/', '');
          grunt.log.writeln('New config for "' + task + '": ' + JSON.stringify(currentConfig));
          grunt.config(['coffee', task], currentConfig);
          break;
      }
    }
  });

  // Initialization
  grunt.loadTasks('./conf/grunt/tasks');
};
