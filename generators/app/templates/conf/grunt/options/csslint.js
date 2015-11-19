module.exports = {
  options: {
    csslintrc: '<%= dir.conf_linter %>/.csslintrc.json'
  },
  check_main_css: {
    src: ['<%= dir.src_main_css %>/**/*.css']
  }
};
