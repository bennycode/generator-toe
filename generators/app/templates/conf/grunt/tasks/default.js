module.exports = function(grunt) {
  grunt.registerTask('default', function() {
    var styleLanguage = grunt.config('style');

    grunt.task.run([
      // Retrieve dependencies
      'init',
      // Check scripts
      'check:demo',
      'check:main',
      'check:test',
      // Check styles
      'check:demo:' + styleLanguage,
      'check:main:' + styleLanguage,
      // Build scripts
      'build:demo',
      'build:main',
      'build:test',
      // Build styles
      'build:demo:' + styleLanguage,
      'build:main:' + styleLanguage,
      // Test scripts
      'test:specs_browser',
      // Run development environment
      'dev'
    ]);
  });
};
