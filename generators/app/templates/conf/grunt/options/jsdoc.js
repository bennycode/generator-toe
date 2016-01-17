module.exports = {
  docs_code_js: {
    options: {
      destination: '<%= dir.docs_code %>'
    },
    src: [
      '<%= dir.src_main_js %>/**/*.js'
    ]
  }
};
