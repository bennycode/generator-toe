module.exports = {
  options: {
    configFile: '<%= dir.conf_linter %>/coffeelint.json'
  },
  check_demo_coffee: {
    files: {
      src: '<%= dir.source_demo_coffee %>/**/*.coffee'
    }
  },
  check_main_coffee: {
    files: {
      src: '<%= dir.source_main_coffee %>/**/*.coffee'
    }
  },
  check_test_coffee: {
    files: {
      src: '<%= dir.source_test_coffee %>/**/*.coffee'
    }
  }
};
