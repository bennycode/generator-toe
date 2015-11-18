module.exports = {
  dist: {
    options: {
      singleline: true,
      multiline: true
    },
    src: [
      '<%= dir.dist %>/<%= pkg.name %>.js',
      '<%= dir.dist %>/<%= pkg.name %>.min.js'
    ]
  }
};
