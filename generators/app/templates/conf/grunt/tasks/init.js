module.exports = function(grunt) {
  grunt.registerTask('init', function() {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    grunt.task.run([
      'bower:init'
    ]);
  });
};
