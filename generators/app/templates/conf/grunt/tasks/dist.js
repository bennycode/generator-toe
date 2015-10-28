module.exports = function(grunt) {
  grunt.registerTask('dist', 'Create release-ready app', function() {
    grunt.task.run([
      'init',
      'eslint:src',
      'clean:distributables',
      'uglify:dist'
    ]);
  });
};
