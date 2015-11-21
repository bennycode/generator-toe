module.exports = function(grunt) {
  grunt.registerTask('default', function() {
    var styleLanguage = grunt.config('style');

    grunt.task.run([
      // Retrieve dependencies
      'init',
      // Check scripts
      'check:main',
      'check:test',
      // Build scripts
      'build:main',
      'build:test',
      // Check styles
      'check:main:' + styleLanguage,
      // Build styles
      'build:main:' + styleLanguage,
      // Run tests
      'test:specs',
      // Run development environment
      'dev:open'
    ]);
  });
};
