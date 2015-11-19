module.exports = {
  build_main_js: {
    files: [{
      cwd: '<%= dir.src_main_js %>',
      dest: '<%= dir.build_main_js %>',
      expand: true,
      src: '**/*.js'
    }]
  }
};
