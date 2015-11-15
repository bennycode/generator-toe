'use strict';

/* globals process */

var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var util = require('util');
var wrench = require('wrench');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: {},
  prompting: {
    askInitialQuestions: function () {
      var done = this.async();

      var parentDirectory = path.resolve(process.cwd());
      var currentDirectory = path.basename(parentDirectory);

      // Intro
      var intro = 'Welcome to the glorious ' + chalk.yellow('Toe') + ' generator!';
      this.log(yosay(intro));

      // Prompts
      var organizationName = {
        message: 'I am assuming your project name is "' + chalk.yellow(currentDirectory) + '".' +
        '\r\nWhat is your name on GitHub where you want to host this project?',
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
        default: 0
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
        organizationName,
        scriptLanguage,
        styleLanguage,
        licenseType
      ];

      var askInitialQuestions = function (answers) {
        this.setup = {
          projectName: currentDirectory,
          scriptLanguage: answers.scriptLanguage,
          styleLanguage: answers.styleLanguage,
          organizationName: answers.organizationName || 'placeholder',
          licenseType: answers.licenseType,
          currentYear: new Date().getFullYear()
        };

        this.setup.cmdGitHubUrl = 'git://github.com/' + this.setup.organizationName + '/' + this.setup.projectName + '.git';
        console.log('\r\nOkay! Getting everything ready for: https://github.com/' + this.setup.organizationName + '/' + this.setup.projectName + '\r\n');

        done();
      };

      this.prompt(initialQuestions, askInitialQuestions.bind(this));
    }
  },
  configuring: {},
  default: {},
  writing: {
    writeRootFiles: function () {
      // .editorconfig
      this.fs.copy(this.templatePath('_.editorconfig'), this.destinationPath('.editorconfig'));
      // .gitattributes
      this.fs.copy(this.templatePath('_.gitattributes'), this.destinationPath('.gitattributes'));
      // .gitignore
      this.fs.copy(this.templatePath('_.gitignore'), this.destinationPath('.gitignore'));
      // bower.json
      this.template('_bower.json', 'bower.json', this, {});
      // Gruntfile.js
      this.template('_Gruntfile.js', 'Gruntfile.js', this, {});
      // LICENSE.md
      if (this.setup.licenseType) {
        this.template('licenses/' + this.setup.licenseType, 'LICENSE.md', this, {});
      }
      // package.json
      this.template('_package.json', 'package.json', this, {});
      // README.md
      this.template('_README.md', 'README.md', this, {});
    },
    writeDirectories: function () {
      var scriptLanguages = [
        'coffee',
        'js',
        'ts'
      ];

      var styleLanguages = [
        'css',
        'less',
        'sass'
      ];

      var self = this;

      function createDirectoriesForSources(directory) {
        fs.mkdirSync(self.destinationPath(directory));

        for (var i in scriptLanguages) {
          fs.mkdirSync(self.destinationPath(directory + '/' + scriptLanguages[i]));
        }

        for (var i in styleLanguages) {
          fs.mkdirSync(self.destinationPath(directory + '/' + styleLanguages[i]));
        }
      }

      fs.mkdirSync(this.destinationPath('build'));
      wrench.copyDirSyncRecursive(this.templatePath('conf'), this.destinationPath('conf'));
      fs.mkdirSync(this.destinationPath('demo'));
      fs.mkdirSync(this.destinationPath('dist'));
      fs.mkdirSync(this.destinationPath('docs'));
      fs.mkdirSync(this.destinationPath('lib'));
      fs.mkdirSync(this.destinationPath('reports'));
      fs.mkdirSync(this.destinationPath('src'));
      createDirectoriesForSources('src/demo');
      createDirectoriesForSources('src/main');
      createDirectoriesForSources('src/test');
    },
    writeNetBeansProjectFiles: function () {
      return;
      this.fs.copy(this.templatePath('_nb-configuration.xml'), this.destinationPath('nb-configuration.xml'));
    },
    writeWebStormProjectFiles: function () {
      return;
      fs.mkdirSync(this.destinationPath('.idea'));
      this.template('_.idea/_.name', '.idea/.name', this, {});
      this.template('_.idea/_codeStyleSettings.xml', '.idea/codeStyleSettings.xml', this, {});
      this.template('_.idea/_project-name.iml', '.idea/' + this.setup.projectName + '.iml', this, {});
      this.template('_.idea/_watcherTasks.xml', '.idea/watcherTasks.xml', this, {});
    }
  },
  conflicts: {},
  install: {
    installDependencies: function () {
      if (process.env.TRAVIS) {
        return;
      }

      this.log('\r\nRunning ' + chalk.yellow('npm install') + ' for you...\r\n');
      this.npmInstall();
    }
  },
  end: {
    startDevelopment: function () {
      if (process.env.TRAVIS) {
        return;
      }

      this.log('\r\nStarting ' + chalk.yellow('development environment') + ' for you...\r\n');
      var done = this.async();
      this.spawnCommand('grunt', ['default', '--force']).on('close', done);
    }
  }
});
