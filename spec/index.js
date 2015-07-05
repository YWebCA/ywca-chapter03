var CustomReporter = require('./reporter')
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    'spec.js',
    'minimum_spec.js',
    'recursion_spec.js',
    'bean_spec.js'
  ],
  helpers: [
    'environment.js',
    'answers/index.js',
    'answers/minimum.js',
    'answers/recursion.js',
    'answers/bean.js'
  ]
});

jasmine.addReporter(CustomReporter)

jasmine.execute()