module.exports = {
  build_lib_ts: {
    src: ['<%= dir.lib %>/**/*.ts'],
    outDir: '<%= dir.build_lib_ts %>',
    options: {
      rootDir: '.'
    }
  },
  build_main_ts: {
    src: ['<%= dir.src_main_ts %>/**/*'],
    outDir: '<%= dir.build_main_ts %>'
  },
  build_test_ts: {
    src: ['<%= dir.src_test_ts %>/**/*'],
    outDir: '<%= dir.build_test_ts %>'
  }
};
