module.exports = function(grunt) {
  // CoffeeScript
  grunt.registerTask('check_demo_coffee', function() {
    grunt.task.run('coffeelint:check_demo_coffee');
  });

  grunt.registerTask('check_main_coffee', function() {
    grunt.task.run('coffeelint:check_main_coffee');
  });

  grunt.registerTask('check_test_coffee', function() {
    grunt.task.run('coffeelint:check_test_coffee');
  });

  // JavaScript
  grunt.registerTask('check_demo_js', function() {
    grunt.task.run('eslint:check_demo_js');
  });

  grunt.registerTask('check_main_js', function() {
    grunt.task.run('eslint:check_main_js');
  });

  grunt.registerTask('check_test_js', function() {
    grunt.task.run('eslint:check_test_js');
  });

  // TypeScript
  grunt.registerTask('check_demo_ts', function() {
    grunt.task.run(['tslint:check_demo_ts']);
  });

  grunt.registerTask('check_main_ts', function() {
    grunt.task.run(['tslint:check_main_ts']);
  });

  grunt.registerTask('check_test_ts', function() {
    grunt.task.run(['tslint:check_test_ts']);
  });

  // CSS
  grunt.registerTask('check_demo_css', function() {
    grunt.task.run('csslint:check_demo_css');
  });

  grunt.registerTask('check_main_css', function() {
    grunt.task.run('csslint:check_main_css');
  });

  // SASS
  grunt.registerTask('check_demo_sass', function() {
    grunt.task.run('scsslint:check_demo_sass');
  });

  grunt.registerTask('check_main_sass', function() {
    grunt.task.run('scsslint:check_main_sass');
  });

  // Less
  grunt.registerTask('check_demo_less', function() {
    grunt.task.run('lesslint:check_demo_less');
  });

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

    grunt.task.run(parts.join('_'));
  });
};
