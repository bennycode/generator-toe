module.exports = function(grunt) {
  grunt.registerTask('default', 'Test app, transpile code and run development environment', function() {
    var styleLanguage = grunt.config('style');

    grunt.task.run([
      'david',
      'init',
      // Check & build scripts
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
      'test:specs',
      // Run development environment
      'dev'
    ]);
  });
};
