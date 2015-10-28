module.exports = {
  options: {
    configFile: '<%= dir.conf_linter %>/.eslintrc'
  },
  check_demo_js: ['<%= dir.source_demo_js %>/**/*.js'],
  check_main_js: ['<%= dir.source_main_js %>/**/*.js'],
  check_test_js: ['<%= dir.source_test_js %>/**/*.js']
};
