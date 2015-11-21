module.exports = function(grunt) {
  grunt.registerTask('docs', function(programmingLanguage) {
    var tasks = [
      'clean:documentation'
    ];

    var validParameter = true;

    switch (programmingLanguage) {
      case 'js':
        tasks.push('jsdoc:source_code');
        break;
      default:
        grunt.log.writeln('Invalid parameter');
        validParameter = false;
    }

    if (validParameter) {
      grunt.task.run(tasks);
    }
  });
};
