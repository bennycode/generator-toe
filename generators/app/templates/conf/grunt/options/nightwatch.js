module.exports = {
  options: {
    standalone: true,
    jar_url: 'https://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar',
    globals_path: '<%= dir.conf_nightwatch %>/globals.js',
    src_folders: ['<%= dir.src_test_js_nightwatch_tests %>'],
    output_folder: '<%= dir.reports_nightwatch %>',
    "test_settings": {
      "default": {
        "launch_url": 'http://localhost:<%= server.port.http %>/<%= dir.demo %>',
        "selenium_host": "localhost",
        "selenium_port": '<%= server.port.selenium %>',
        "silent": true,
        "use_xpath": true,
        "desiredCapabilities": {
          "browserName": "firefox",
          "javascriptEnabled": true,
          "acceptSslCerts": true
        },
        "screenshots": {
          "enabled": true,
          "on_failure": true,
          "on_error": true,
          "path": '<%= dir.reports_nightwatch_screenshots %>'
        }
      }
    },
    "selenium": {
      "host": "127.0.0.1",
      "port": '<%= server.port.selenium %>',
      "cli_args": {
        "webdriver.chrome.driver": "",
        "webdriver.ie.driver": ""
      }
    }
  },
  "browserstack": {
    standalone: true,
    jar_url: 'https://selenium-release.storage.googleapis.com/2.48/selenium-server-standalone-2.48.2.jar',
    globals_path: '<%= dir.conf_nightwatch %>/globals.js',
    src_folders: ['<%= dir.src_test_js_nightwatch_tests %>'],
    output_folder: '<%= dir.reports_nightwatch %>',
    "test_settings": {
      "default": {
        "launch_url": "http://hub.browserstack.com",
        "selenium_port": 80,
        "selenium_host": "hub.browserstack.com",
        "silent": true,
        "screenshots": {
          "enabled": false,
          "path": ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",
          "javascriptEnabled": true,
          "acceptSslCerts": true,
          "browserstack.user": "",
          "browserstack.key": ""
        }
      }
    },
    "selenium": {
      "start_process": false,
      "host": "hub.browserstack.com",
      "port": 80
    }
  }
};
