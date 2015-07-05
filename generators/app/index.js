'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  paths: function () {
    this.destinationRoot('chapter02');
  },

  writing: {
    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      )
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      )
      this.fs.copy(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      )
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('index.js')
      )
      this.fs.copy(
        this.templatePath('_minimum.js'),
        this.destinationPath('triangle.js')
      )
      this.fs.copy(
        this.templatePath('_recursion.js'),
        this.destinationPath('recursion.js')
      )
      this.fs.copy(
        this.templatePath('_bean.js'),
        this.destinationPath('bean.js')
      )

    }
  }
});
