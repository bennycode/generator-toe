module.exports = {
  options: {
    event: ['changed', 'added', 'deleted'],
    livereload: true,
    spawn: false
  },
  // Coffee
  src_main_coffee: {
    files: ['<%= dir.src_main_coffee %>/**/*.coffee'],
    tasks: ['coffee:build_main_coffee']
  },
  src_test_coffee: {
    files: ['<%= dir.src_test_coffee %>/**/*.coffee'],
    tasks: ['coffee:build_test_coffee']
  },
  // Less
  src_main_less: {
    files: ['<%= dir.src_main_less %>/**/*.less'],
    tasks: ['less:build_main_less']
  },
  // SASS
  src_main_sass: {
    files: ['<%= dir.src_main_sass %>/**/*.scss'],
    tasks: ['sass:build_main_sass']
  },
  // HTML
  demo_html: {
    files: ['<%= dir.demo %>/**/*.html']
  },
  // JavaScript
  src_main_js: {
    files: ['<%= dir.src_main_js %>/**/*.js'],
    tasks: ['copy:build_main_js']
  },
  // HTML
  src_main_html: {
    files: ['<%= dir.src_main_html %>/**/*.html'],
    tasks: ['copy:build_main_html']
  }
};
