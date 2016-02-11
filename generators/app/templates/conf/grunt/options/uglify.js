module.exports = {
  options: {
    banner: '/*! <%= pkg.name %> v<%= pkg.version %> */'
  },
  dist: {
    files: {
      '<%= dir.dist %>/<%= pkg.name %>.min.js': [
        '<%= dir.build_main %>/**/*.js'
      ]
    },
    options: {
      preserveComments: false,
      screwIE8: true,
      sourceMap: true,
      sourceMapIncludeSources: true
    }
  }
};
