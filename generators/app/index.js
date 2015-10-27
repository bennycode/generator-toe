'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: {},
  prompting: {
    askInitialQuestions: function () {
      var done = this.async();

      // Intro
      var intro = 'Welcome to the glorious ' + chalk.yellow('Toe') + ' generator!';
      this.log(yosay(intro));

      // Prompts
      var projectName = {
        message: 'What is your project\'s name?',
        name: 'projectName',
        type: 'input'
      };

      var organizationName = {
        message: 'What is organization\'s name on GitHub?',
        name: 'organizationName',
        type: 'input'
      };

      var scriptLanguage = {
        message: 'What is your project\'s main scripting language?',
        name: 'scriptLanguage',
        type: 'list',
        choices: [
          {
            name: 'CoffeeScript',
            short: 'coffee',
            value: 'coffee'
          },
          {
            name: 'JavaScript',
            short: 'js',
            value: 'js'
          },
          {
            name: 'TypeScript',
            short: 'ts',
            value: 'ts'
          }
        ],
        default: 1
      };

      var styleLanguage = {
        message: 'What is your project\'s main styling language?',
        name: 'styleLanguage',
        type: 'list',
        choices: [
          {
            name: 'CSS',
            short: 'css',
            value: 'css'
          },
          {
            name: 'Less',
            short: 'less',
            value: 'less'
          },
          {
            name: 'SASS',
            short: 'sass',
            value: 'sass'
          }
        ],
        default: 1
      };

      var licenseType = {
        message: 'Which license do you want to include?',
        name: 'licenseType',
        type: 'list',
        choices: [
          {
            name: 'None',
            short: 'none',
            value: false
          },
          {
            name: 'The MIT License',
            short: 'MIT',
            value: 'mit.md'
          },
          {
            name: 'Apache License 2.0',
            short: 'Apache-2.0',
            value: 'apache-v2.0.md'
          },
          {
            name: 'GNU General Public License 2.0',
            short: 'GPL-2.0',
            value: 'gnu-gpl-v2.0'
          },
          {
            name: 'Mozilla Public License 2.0',
            short: 'MPL-2.0',
            value: 'mpl-v2.0.md'
          },
          {
            name: 'Other',
            short: 'other',
            value: false
          }
        ],
        default: 0
      };

      var addDemoSection = {
        default: true,
        message: 'Would you like to generate a demo section ?',
        name: 'addDemoSection',
        type: 'confirm'
      };

      var isLicensed = {
        type: 'confirm',
        name: 'isLicensed',
        message: 'Do you want to include a license?',
        default: false
      };

      var initialQuestions = [
        scriptLanguage, styleLanguage, projectName, organizationName, licenseType
      ];

      var askInitialQuestions = function (answers) {
        this.projectName = answers.projectName;
        this.scriptLanguage = answers.scriptLanguage;
        this.styleLanguage = answers.styleLanguage;
        this.organizationName = answers.organizationName;
        this.licenseType = answers.licenseType;
        this.cmdGitHubUrl = 'git://github.com/' + this.organizationName + '/' + this.projectName + '.git';
        this.currentYear = new Date().getFullYear();

        console.log('\r\nOkay! Getting everything ready for: https://github.com/' + this.organizationName + '/' + this.projectName);

        done();
      };

      this.prompt(initialQuestions, askInitialQuestions.bind(this));
    }
  },
  configuring: {},
  default: {},
  writing: {
    writeConfigurationFiles: function () {
      this.template('package.json', 'package.json', this, {});

      if (this.licenseType) {
        this.template('licenses/' + this.licenseType, 'LICENSE.md', this, {});
      }
    }
  },
  conflicts: {},
  install: {},
  end: {}
});
