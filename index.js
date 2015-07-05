var CustomReporter = require('./spec/reporter')
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

jasmine.loadConfig({
    spec_dir: 'node_modules/ywca-chapter03/spec/',
    spec_files: [
        'spec.js',
        'minimum_spec.js',
        'recursion_spec.js',
        'bean_spec.js'
    ],
    helpers: [
        'environment.js',
        '../../../chapter03/index.js',
        '../../../chapter03/minimum.js',
        '../../../chapter03/recursion.js',
        '../../../chapter03/bean.js'
    ]
});

jasmine.addReporter(CustomReporter)

jasmine.execute()