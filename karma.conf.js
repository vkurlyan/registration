// Karma configuration
// Generated on Fri Sep 04 2015 16:05:34 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'bower_components/jquery/dist/jquery.js', included: false},
      {pattern: 'bower_components/underscore-amd/underscore.js', included: false},
      {pattern: 'bower_components/backbone-amd/backbone.js', included: false},
      {pattern: 'bower_components/backbone-validation/dist/backbone-validation-amd.js', included: false},
      {pattern: 'bower_components/handlebars/handlebars.runtime.amd.js', included: false},
      {pattern: 'bower_components/jQuery.serializeObject/dist/jquery.serializeObject.min.js', included: false},
      {pattern: 'js/**/*js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},
      'test/test-main.js'
    ],


    // list of files to exclude
    exclude: [
      'js/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
