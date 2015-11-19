module.exports = function(grunt) {
  // CoffeeScript
  grunt.registerTask('check_main_coffee', function() {
    grunt.task.run('coffeelint:check_main_coffee');
  });

  grunt.registerTask('check_test_coffee', function() {
    grunt.task.run('coffeelint:check_test_coffee');
  });

  // JavaScript
  grunt.registerTask('check_main_js', function() {
    grunt.task.run('eslint:check_main_js');
  });

  grunt.registerTask('check_test_js', function() {
    grunt.task.run('eslint:check_test_js');
  });

  // TypeScript
  grunt.registerTask('check_main_ts', function() {
    grunt.task.run(['tslint:check_main_ts']);
  });

  grunt.registerTask('check_test_ts', function() {
    grunt.task.run(['tslint:check_test_ts']);
  });

  // CSS
  grunt.registerTask('check_main_css', function() {
    grunt.task.run('csslint:check_main_css');
  });

  // SASS
  grunt.registerTask('check_main_sass', function() {
    grunt.task.run('scsslint:check_main_sass');
  });

  // Less
  grunt.registerTask('check_main_less', function() {
    grunt.task.run('lesslint:check_main_less');
  });

  // Default
  grunt.registerTask('check', function(option, scriptLanguage) {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    if (option === undefined) {
      option = 'main';
    }

    var parts = [
      grunt.task.current.name,
      option,
      scriptLanguage || grunt.config('script')
    ];

    grunt.option('force', true);
    grunt.task.run(parts.join('_'));
  });
};
