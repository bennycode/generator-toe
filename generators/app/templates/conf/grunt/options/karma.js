module.exports = {
  options: {
    basePath: '',
    // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [process.env.TRAVIS ? 'Chrome_travis_ci' : 'Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browserNoActivityTimeout: 60000,
    // How many browser should be started simultaneously
    concurrency: Infinity,
    frameworks: ['jasmine'],
    files: [
      '<%= dir.lib %>/**/*.js',
      '<%= dir.build_main %>/**/*.js',
      '<%= dir.build_helper %>/**/*.js',
      '<%= dir.build_test %>/**/*Spec.js'
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
    singleRun: true,
    logLevel: 'debug'
  },
  test_specs_browser: {
    coverageReporter: {}
  },
  docs_coverage: {
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: '<%= dir.docs_coverage %>'
    },
    preprocessors: {
      '<%= dir.build_main %>/**/*.js': ['coverage']
    }
  }
};
