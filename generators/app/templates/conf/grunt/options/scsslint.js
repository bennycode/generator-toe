module.exports = {
  options: {
    config: '<%= dir.conf_linter %>/.scss-lint.yml'
  },
  check_main_sass: ['<%= dir.src_main_sass %>/**/*.scss']
};
