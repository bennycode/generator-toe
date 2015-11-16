module.exports = {
  main_js: {
    files: [{
      expand: true,
      src: ['<%= dir.source_main_js %>'],
      dest: '<%= dir.build_main_js %>'
    }]
  }
};
