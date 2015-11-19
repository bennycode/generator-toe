module.exports = {
  build_main_sass: {
    files: [{
      cwd: '<%= dir.source_main_sass %>',
      dest: '<%= dir.build_main_sass %>',
      expand: true,
      src: ['**/*.scss'],
      ext: '.css'
    }]
  }
};
