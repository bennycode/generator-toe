'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('toe:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        projectName: 'test-project',
        organizationName: 'welovecoding',
        scriptLanguage: 'coffee',
        styleLanguage: 'sass',
        licenseType: 'mpl-v2.0.md'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.travis.yml',
      'bower.json',
      'Gruntfile.js',
      'LICENSE.md',
      'package.json',
      'README.md'
    ]);
  });
});
