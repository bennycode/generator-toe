module.exports = {
  build_lib_coffee: {
    files: [{
      cwd: '<%= dir.lib %>',
      dest: '<%= dir.build_lib_coffee %>',
      expand: true,
      ext: '.js',
      src: '**/*.coffee'
    }]
  },
  build_main_coffee: {
    files: [{
      cwd: '<%= dir.src_main_coffee %>',
      dest: '<%= dir.build_main_coffee %>',
      expand: true,
      ext: '.js',
      src: '**/*.coffee'
    }]
  },
  build_test_coffee: {
    files: [{
      cwd: '<%= dir.src_test_coffee %>',
      dest: '<%= dir.build_test_coffee %>',
      expand: true,
      ext: '.js',
      src: '**/*.coffee'
    }]
  }
};
