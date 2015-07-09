var chalk = require('chalk')

var completeSuites = []
var suiteStack = []
var logStack = []
var currentLog = []
var messages = []

specLog = console.log
console.log = function() {
  for (var index in arguments)
    messages.push(arguments[index])
}

module.exports = {
  jasmineStarted: function(suiteInfo) {
  },
  suiteStarted: function(result) {
    var suite = {
      description: result.description,
      pass: true,
      suites: [],
      specs: [],
      depth: suiteStack.length,
      toString: function() {
        var output = "";
        var style = chalk
        for (var index = 0; index < this.depth; index++) output += "  "
        output += this.description
        if (this.pass)
          style = style.green
        else
          style = style.red
        if (this.depth == 0) style = style.underline
        output = style(output) + " "

        for (index in this.specs)
          if (this.specs[index].pass)
            output += chalk.green("*")
          else
            output += chalk.red("X")

        for (index in this.suites)
          if (this.suites[index].pass)
            output += chalk.green("*")
          else
            output += chalk.red("X")

        for (index in this.specs)
          if (!this.specs[index].pass)
            output += "\n" + this.specs[index].toString()

        for (index in this.suites)
          if (!this.suites[index].pass)
          output += "\n" + this.suites[index].toString()

        if (this.depth == 0) output += "\n"
        return output
      }
    }
    if (suiteStack.length > 0)
      suiteStack[suiteStack.length - 1].suites.push(suite)
    suiteStack.push(suite)
  },
  specStarted: function(result) {
  },
  specDone: function(result) {
    if (result.failedExpectations.length > 0)
      for (index in suiteStack)
        suiteStack[index].pass = false
    var spec = {
      description: result.description,
      pass: result.failedExpectations.length == 0,
      depth: suiteStack.length,
      failedExpectations: [],
      passedExpectations: [],
      toString: function() {
        var output = "";
        var style = chalk.red
        if (this.pass) style = chalk.green
        for (var index = 0; index < this.depth; index++) output += "  "
        output += style(this.description) + " "
        for (var index in this.passedExpectations) output += chalk.green('*')
        for (var index in this.failedExpectations)
          output += "\n" + this.failedExpectations[index].toString()
        return output
      }
    }
    for (index in result.passedExpectations) {
      var expectation = {
        depth: suiteStack.length + 1,
        expected: result.passedExpectations[index].expected,
        actual: result.passedExpectations[index].actual,
        toString: function() {
          var output = ""
          for (var index = 0; index < this.depth; index++) output += "  "
          output += chalk.green.bold("Result:\n")
          output += chalk.bgBlack(this.expected + "\n")
          return output
        }
      }
      spec.passedExpectations.push(expectation)
    }
    for (index in result.failedExpectations){
      var expectation = {
        depth: suiteStack.length + 1,
        expected: result.failedExpectations[index].expected,
        actual: result.failedExpectations[index].actual,
        toString: function() {
          var output = ""
          for (var index = 0; index < this.depth; index++) output += "  "
          output += chalk.red.bold("Expected:\n")
          output += chalk.yellow(this.expected + "\n")
          for (var index = 0; index < this.depth; index++) output += "  "
          output += chalk.red.bold("Actual:\n")
          output += chalk.yellow(this.actual + "\n")
          return output
        }
      }
      spec.failedExpectations.push(expectation)
    }
    suiteStack[suiteStack.length - 1].specs.push(spec)
  },
  suiteDone: function(result) {
    var suite = suiteStack.pop()
    if (suiteStack.length == 0)
      completeSuites.push(suite)
  },
  jasmineDone: function() {
    specLog()
    specLog()
    for (var index in completeSuites) {
      specLog(completeSuites[index].toString())
    }
    specLog("The following was logged:")
    for (var index in messages) {
      specLog(chalk.yellow(messages[index]))
    }
  }
}