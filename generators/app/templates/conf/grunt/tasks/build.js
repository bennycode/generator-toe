module.exports = function(grunt) {
  // CoffeeScript
  grunt.registerTask('build_lib_coffee', function() {
    grunt.task.run([
      'clean:build_lib_coffee',
      'coffee:build_lib_coffee'
    ]);
  });

  grunt.registerTask('build_main_coffee', function() {
    grunt.task.run([
      'clean:build_main_coffee',
      'coffee:build_main_coffee'
    ]);
  });

  grunt.registerTask('build_test_coffee', function() {
    grunt.task.run([
      'clean:build_test_coffee',
      'coffee:build_test_coffee'
    ]);
  });

  // JavaScript
  var noOperation = function() {
    grunt.log.writeln('No operation');
  };

  grunt.registerTask('build_lib_js', noOperation);
  grunt.registerTask('build_main_js', function() {
    grunt.task.run([
      'clean:build_main_js',
      'copy:build_main_js'
    ]);
  });
  grunt.registerTask('build_test_js', noOperation);

  // TypeScript
  grunt.registerTask('build_lib_ts', function() {
    grunt.task.run([
      'clean:build_lib_ts',
      'ts:build_lib_ts'
    ]);
  });

  grunt.registerTask('build_main_ts', function() {
    grunt.task.run([
      'clean:build_main_ts',
      'ts:build_main_ts'
    ]);
  });

  grunt.registerTask('build_test_ts', function() {
    grunt.task.run([
      'clean:build_test_ts',
      'ts:build_test_ts'
    ]);
  });

  // CSS
  grunt.registerTask('build_main_css', noOperation);

  // SASS
  grunt.registerTask('build_main_sass', function() {
    grunt.task.run([
      'clean:build_main_sass',
      'sass:build_main_sass'
    ]);
  });

  // Less
  grunt.registerTask('build_main_less', function() {
    grunt.task.run([
      'clean:build_main_less',
      'less:build_main_less'
    ]);
  });

  // Default
  grunt.registerTask('build', function(option, scriptLanguage) {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    if (option === undefined) {
      option = 'main';
    }

    var parts = [
      grunt.task.current.name,
      option,
      scriptLanguage || grunt.config('script')
    ];

    grunt.task.run(parts.join('_'));
  });
};
