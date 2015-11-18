module.exports = {
  options: {
    livereload: true,
    nospawn: true
  },
  demo_html: {
    files: ['<%= dir.demo %>/**/*.html']
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
  },
  source_demo_less: {
    files: ['<%= dir.source_demo_less %>/**/*.less'],
    tasks: ['less:build_demo_less']
  },
  source_main_less: {
    files: ['<%= dir.source_main_less %>/**/*.less'],
    tasks: ['less:build_main_less']
  },
  source_demo_sass: {
    files: ['<%= dir.source_demo_sass %>/**/*.scss'],
    tasks: ['sass:build_demo_sass']
  },
  source_main_sass: {
    files: ['<%= dir.source_main_sass %>/**/*.scss'],
    tasks: ['sass:build_main_sass']
  }
};
