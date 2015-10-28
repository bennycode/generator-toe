module.exports = {
  options: {
    csslint: {
      csslintrc: '<%= dir.conf_linter %>/.csslintrc.json'
    }
  },
  check_demo_less: ['<%= dir.source_demo_less %>/**/*.less'],
  check_main_less: ['<%= dir.source_main_less %>/**/*.less']
};
