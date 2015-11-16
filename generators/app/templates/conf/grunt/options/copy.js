module.exports = {
  build_main_js: {
    files: [{
      expand: true,
      src: ['<%= dir.source_main_js %>/**/*js'],
      dest: '<%= dir.build_main_js %>'
    }]
  }
};
