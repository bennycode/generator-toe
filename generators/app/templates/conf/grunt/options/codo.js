module.exports = {
  options: {
    name: '<%= pkg.name %>',
    output: '<%= dir.docs_code %>',
    stats: true,
    undocumented: false
  },
  docs_code_coffee: {
    src: '<%= dir.src_main_coffee %>'
  }
};
