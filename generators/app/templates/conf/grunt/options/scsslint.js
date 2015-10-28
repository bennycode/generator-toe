module.exports = {
  options: {
    config: '<%= dir.conf_linter %>/.scss-lint.yml'
  },
  check_demo_sass: ['<%= dir.source_demo_sass %>/**/*.scss'],
  check_main_sass: ['<%= dir.source_main_sass %>/**/*.scss']
};
