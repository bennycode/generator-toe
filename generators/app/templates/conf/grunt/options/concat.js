module.exports = {
  options: {
    separator: ';'
  },
  dist: {
    src: [
      '<%= dir.build_main %>/**/*.js'
    ],
    dest: '<%= dir.dist %>/<%= pkg.name %>.js'
  }
};
