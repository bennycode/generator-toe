module.exports = {
  options: {
    configuration: '<%= dir.conf_linter %>/tslint.json'
  },
  check_main_ts: {
    src: ['<%= dir.src_main_ts %>/**/*.ts']
  },
  check_test_ts: {
    src: ['<%= dir.src_test_ts %>/**/*.ts']
  }
};
