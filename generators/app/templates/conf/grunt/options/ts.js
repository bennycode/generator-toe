module.exports = {
  build_demo_ts: {
    src: ['<%= dir.source_demo_ts %>/**/*'],
    outDir: '<%= dir.build_demo_ts %>'
  },
  build_lib_ts: {
    src: ['<%= dir.lib %>/**/*.ts'],
    outDir: '<%= dir.build_lib_ts %>',
    options: {
      rootDir: '.'
    }
  },
  build_main_ts: {
    src: ['<%= dir.source_main_ts %>/**/*'],
    outDir: '<%= dir.build_main_ts %>'
  },
  build_test_ts: {
    src: ['<%= dir.source_test_ts %>/**/*'],
    outDir: '<%= dir.build_test_ts %>'
  }
};
