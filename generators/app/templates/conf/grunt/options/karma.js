module.exports = {
  options: {
    basePath: '',
    frameworks: ['jasmine'],
    files: [],
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
    files: [
      {src: ['<%= dir.lib %>/**/*.js'], served: true, included: true},
      {src: ['<%= dir.build_main %>/**/*.js'], served: true, included: true},
      {src: ['<%= dir.build_helper %>/**/*.js'], served: true, included: true},
      {src: ['<%= dir.build_test %>/**/*Spec.js'], served: true, included: true}
    ]
  }
};
