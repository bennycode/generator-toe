module.exports = {
  options: {
    livereload: true
  },
  source_demo_coffee: {
    files: ['<%= dir.source_demo_coffee %>/**/*.coffee'],
    tasks: ['coffee:build_demo_coffee']
  },
  source_main_coffee: {
    files: ['<%= dir.source_main_coffee %>/**/*.coffee'],
    tasks: ['coffee:build_main_coffee']
  },
  source_test_coffee: {
    files: ['<%= dir.source_test_coffee %>/**/*.coffee'],
    tasks: ['coffee:build_test_coffee']
  }
};
