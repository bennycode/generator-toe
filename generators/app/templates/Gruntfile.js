module.exports = function(grunt) {
  // Dependencies
  require('load-grunt-tasks')(grunt, {
    pattern: [
      'grunt-*',
      '!grunt-template-jasmine-istanbul'
    ]
  });

  // Helper functions
  function concatenateFiles(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
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
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // Initialization
  grunt.loadTasks('./conf/grunt/tasks');
};
