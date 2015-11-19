module.exports = {
  build_main_less: {
    files: [{
      cwd: '<%= dir.src_main_less %>',
      dest: '<%= dir.build_main_less %>',
      expand: true,
      ext: '.css',
      src: '**/*.less'
    }]
  }
};
