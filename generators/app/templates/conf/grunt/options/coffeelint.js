module.exports = {
  options: {
    configFile: '<%= dir.conf_linter %>/coffeelint.json'
  },
  check_main_coffee: {
    files: {
      src: '<%= dir.src_main_coffee %>/**/*.coffee'
    }
  },
  check_test_coffee: {
    files: {
      src: '<%= dir.src_test_coffee %>/**/*.coffee'
    }
  }
};
