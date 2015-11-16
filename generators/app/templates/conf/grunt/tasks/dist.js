module.exports = function (grunt) {
  grunt.registerTask('dist', function () {
    grunt.task.run([
      'init',
      'check:main',
      'build:main',
      'test:specs',
      'clean:dist',
      'concat:dist',
      'uglify:dist'
    ]);
  });
};
