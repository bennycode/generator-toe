module.exports = {
  build_demo_coffee: {
    cwd: '<%= dir.source_demo_coffee %>',
    dest: '<%= dir.build_demo_coffee %>',
    expand: true,
    ext: '.js',
    src: '**/*.coffee'
  },
  build_lib_coffee: {
    cwd: '<%= dir.lib %>',
    dest: '<%= dir.build_lib_coffee %>',
    expand: true,
    ext: '.js',
    src: '**/*.coffee'
  },
  build_main_coffee: {
    cwd: '<%= dir.source_main_coffee %>',
    dest: '<%= dir.build_main_coffee %>',
    expand: true,
    ext: '.js',
    src: '**/*.coffee'
  },
  build_test_coffee: {
    cwd: '<%= dir.source_test_coffee %>',
    dest: '<%= dir.build_test_coffee %>',
    expand: true,
    ext: '.js',
    src: '**/*.coffee'
  }
};
