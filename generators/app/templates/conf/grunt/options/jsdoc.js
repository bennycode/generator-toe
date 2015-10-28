module.exports = {
  source_code: {
    options: {
      destination: '<%= dir.documentation %>'
    },
    src: [
      '<%= dir.source_code.js %>/**/*.js'
    ]
  }
};
