module.exports = {
  options: {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '<%= dir.lib %>/**/*.js',
      '<%= dir.build_main %>/**/*.js',
      '<%= dir.src_main_js %>/**/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    coverageReporter: {
      dir: '<%= dir.reports_coverage %>',
      reporters: [{
        type: 'html',
        subdir: 'html'
      }]
    },
    port: '<%= server.port.karma_test_runner %>',
    colors: true,
    autoWatch: true,
    singleRun: true
  },
  test_specs_browser: {
    browsers: ['Chrome'],
    coverageReporter: {},
    files: [{
      src: [
        '<%= dir.build_test %>/**/*.js',
        '<%= dir.src_test_js_jasmine_specs %>/**/*Spec.js'
      ]
    }]
  }
};
