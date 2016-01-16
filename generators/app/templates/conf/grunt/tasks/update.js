module.exports = function(grunt) {
  grunt.registerTask('update', function() {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    grunt.task.run([
      'david'
    ]);
  });
};
