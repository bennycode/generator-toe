module.exports = function (grunt) {
  // Helpers
  var supportedBrowsers = ['Chrome', 'Firefox', 'IE', 'PhantomJS'];
  var browserDefault = 'Chrome';

  var isSupportedBrowser = function (browserName) {
    var isSupported = false;
    if (browserName) {
      for (var length = supportedBrowsers.length, i = 0; i < length; i++) {
        if (browserName === supportedBrowsers[i]) {
          isSupported = true;
        }
      }
    }

    return isSupported;
  };

  var startTranspilation = function (scriptLanguage) {
    // JavaScript does not need transpilation
    if (scriptLanguage !== 'js') {
      grunt.task.run([
        'newer:' + scriptLanguage + ':build_main_' + scriptLanguage,
        'newer:' + scriptLanguage + ':build_helper_' + scriptLanguage,
        'newer:' + scriptLanguage + ':build_test_' + scriptLanguage
      ]);
    }
  };

  // Tasks
  var testEndToEnd = function () {
    grunt.task.run('concurrent:test_e2e');
  };

  // TODO: Remove "jasmine" in the future...
  var testSpec = function (testName) {
    if (testName) {
      // Parse info about the Grunt task
      var parts = grunt.task.current.name.split('_');
      var scriptLanguage = parts[parts.length - 1];
      var nextTask = 'test_specs_' + scriptLanguage;
      // Override task settings
      var testName = '<%= dir.build_test_' + scriptLanguage + '_jasmine_specs %>/' + testName + '.js';
      grunt.config('jasmine.' + nextTask + '.options.specs', testName);
      // Run tasks
      startTranspilation(scriptLanguage);
      grunt.task.run(nextTask);
    } else {
      grunt.log.writeln('Please specify the relative path for a Jasmine specification like "Util/MyUtilSpec"');
    }
  };

  var testSpecs = function () {
    var parts = grunt.task.current.name.split('_');
    var scriptLanguage = parts[parts.length - 1];
    grunt.task.run([
      'build_helper_' + scriptLanguage,
      'build_main_' + scriptLanguage,
      'build_test_' + scriptLanguage,
      'jasmine:test_specs_' + scriptLanguage
    ]);
  };

  var testSpecWithBrowser = function (browserName, testName) {
    if (arguments.length === 1) {
      grunt.log.writeln('Invalid number of arguments. Trying to fix this automatically...');
      testName = browserName;
      browserName = browserDefault;
    }

    if (isSupportedBrowser(browserName) && testName) {
      // Get info about the Grunt task
      var parts = grunt.task.current.name.split('_');
      var scriptLanguage = parts[parts.length - 1];
      var taskName = 'test_specs_browser';
      // Override specification setting
      var spec = '<%= dir.build_test_' + scriptLanguage + ' %>/' + testName + '.js';
      grunt.log.writeln('Testing specification (written in ' + scriptLanguage + '): ' + spec);
      var files = [
        {src: ['<%= dir.lib %>/**/*.js'], served: true, included: true},
        {src: ['<%= dir.build_main %>/**/*.js'], served: true, included: true},
        {src: ['<%= dir.build_helper %>/**/*.js'], served: true, included: true},
        {src: [spec], served: true, included: true}
      ];
      grunt.config('karma.' + taskName + '.files', files);
      grunt.config('karma.' + taskName + '.browsers', [browserName]);
      // Run tasks
      startTranspilation(scriptLanguage);
      grunt.task.run('karma:' + taskName);
    } else {
      grunt.log.writeln('You specified an unsupported browser. Please use one of these: ' + supportedBrowsers.join(', '));
    }
  };

  var testSpecsWithBrowser = function (browserName) {
    if (!browserName) {
      grunt.log.writeln('You forgot to specify a browser. Defaulting to "Chrome".');
      browserName = browserDefault;
    }

    if (isSupportedBrowser(browserName)) {
      // Parse info about the Grunt task
      var parts = grunt.task.current.name.split('_');
      var scriptLanguage = parts[parts.length - 1];
      // Override task settings
      var taskName = 'test_specs_browser';
      grunt.config('karma.' + taskName + '.browsers', [browserName]);
      // Run tasks
      grunt.task.run([
        'build_main_' + scriptLanguage,
        'build_test_' + scriptLanguage,
        'karma:' + taskName
      ]);
    } else {
      grunt.log.writeln('You specified an unsupported browser. Please use one of these: ' + supportedBrowsers.join(', '));
    }
  };

  // CoffeeScript
  grunt.registerTask('test_e2e_coffee', testEndToEnd);
  grunt.registerTask('test_spec_coffee', testSpec);
  grunt.registerTask('test_specs_coffee', testSpecs);
  grunt.registerTask('test_spec_browser_coffee', testSpecWithBrowser);
  grunt.registerTask('test_specs_browser_coffee', testSpecsWithBrowser);

  // JavaScript
  grunt.registerTask('test_e2e_js', testEndToEnd);
  grunt.registerTask('test_spec_js', testSpec);
  grunt.registerTask('test_specs_js', testSpecs);
  grunt.registerTask('test_spec_browser_js', testSpecWithBrowser);
  grunt.registerTask('test_specs_browser_js', testSpecsWithBrowser);

  // TypeScript
  grunt.registerTask('test_e2e_ts', testEndToEnd);
  grunt.registerTask('test_spec_ts', testSpec);
  grunt.registerTask('test_specs_ts', testSpecs);
  grunt.registerTask('test_spec_browser_ts', testSpecWithBrowser);
  grunt.registerTask('test_specs_browser_ts', testSpecsWithBrowser);

  // Default
  grunt.registerTask('test', function (option, scriptLanguage) {
    grunt.log.writeln('=== ' + grunt.task.current.name.toUpperCase() + ' ===');

    if (option === undefined) {
      option = 'specs';
    }

    var parts = [
      grunt.task.current.name,
      option,
      scriptLanguage || grunt.config('script')
    ];

    grunt.task.run(parts.join('_'));
  });
};
