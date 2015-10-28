module.exports = {
  build_demo_less: {
    files: [{
      cwd: '<%= dir.source_demo_less %>',
      dest: '<%= dir.build_demo_less %>',
      expand: true,
      ext: '.css',
      src: '**/*.less'
    }]
  },
  build_main_less: {
    files: [{
      cwd: '<%= dir.source_main_less %>',
      dest: '<%= dir.build_main_less %>',
      expand: true,
      ext: '.css',
      src: '**/*.less'
    }]
  }
};
