module.exports = {
  options: {
    configFile: '<%= dir.conf_linter %>/.eslintrc'
  },
  check_main_js: ['<%= dir.src_main_js %>/**/*.js'],
  check_test_js: ['<%= dir.src_test_js %>/**/*.js']
};
