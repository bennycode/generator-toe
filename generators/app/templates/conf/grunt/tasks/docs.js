module.exports = function(grunt) {
  // CoffeeScript
  grunt.registerTask('docs_code_coffee', function() {
    grunt.task.run([
      'clean:docs_code',
      'codo:docs_code_coffee'
    ]);
  });

  // JavaScript
  grunt.registerTask('docs_code_js', function() {
    grunt.task.run([
      'clean:docs_code',
      'jsdoc:docs_code_js'
    ]);
  });

  // Default
  grunt.registerTask('docs', function(option, scriptLanguage) {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    if (option === undefined) {
      option = 'code';
    }

    var parts = [
      grunt.task.current.name,
      option,
      scriptLanguage || grunt.config('script')
    ];

    grunt.task.run(parts.join('_'));
  });
};
