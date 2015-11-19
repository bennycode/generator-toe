module.exports = function (grunt) {
  grunt.registerTask('dev', function (option) {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    if (option === 'open') {
      var config = grunt.config(['connect', 'dev', 'options']);
      config['open'] = 'http://localhost:<%= server.port.http %>/';
      grunt.config(['connect', 'dev', 'options'], config);
    }

    grunt.task.run([
      'connect:dev',
      'watch'
    ]);
  });
};
