module.exports = {
  options: {
    csslintrc: '<%= dir.conf_linter %>/.csslintrc.json'
  },
  check_demo_css: {
    src: ['<%= dir.source_demo_css %>/**/*.css']
  },
  check_main_css: {
    src: ['<%= dir.source_main_css %>/**/*.css']
  }
};
