module.exports = {
  options: {
    csslint: {
      csslintrc: '<%= dir.conf_linter %>/.csslintrc.json'
    }
  },
  check_main_less: ['<%= dir.src_main_less %>/**/*.less']
};
