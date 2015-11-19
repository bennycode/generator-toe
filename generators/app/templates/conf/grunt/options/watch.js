module.exports = {
  options: {
    livereload: true,
    nospawn: true
  },
  // Coffee
  source_main_coffee: {
    files: ['<%= dir.source_main_coffee %>/**/*.coffee'],
    tasks: ['coffee:build_main_coffee']
  },
  source_test_coffee: {
    files: ['<%= dir.source_test_coffee %>/**/*.coffee'],
    tasks: ['coffee:build_test_coffee']
  },
  // Less
  source_main_less: {
    files: ['<%= dir.source_main_less %>/**/*.less'],
    tasks: ['less:build_main_less']
  },
  // SASS
  source_main_sass: {
    files: ['<%= dir.source_main_sass %>/**/*.scss'],
    tasks: ['sass:build_main_sass']
  },
  // HTML
  demo_html: {
    files: ['<%= dir.demo %>/**/*.html']
  },
  // JavaScript
  source_main_js: {
    files: ['<%= dir.source_main_js %>/**/*.js'],
    tasks: ['copy:build_main_js']
  }
};
