var gulp = require('gulp');
var shell = require('gulp-shell');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var amdOptimize = require('amd-optimize');
var eventStream = require('event-stream');
var order = require('gulp-order');

var paths = {
    requireJS: 'bower_components/requirejs/require.js',
    scripts: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/underscore-amd/underscore.js',
        'bower_components/backbone-amd/backbone.js',
        'bower_components/backbone-validation/dist/backbone-validation-amd.js',
        'bower_components/backbone-validation/dist/backbone-validation.js',
        'bower_components/handlebars/handlebars.runtime.amd.js',
        'bower_components/handlebars/handlebars.runtime.js',
        'bower_components/jQuery.serializeObject/dist/jquery.serializeObject.min.js',
        'js/**/*.js'
    ],
    build: 'build'
};

/**
 * Templates compilation
 */
gulp.task('templates', shell.task([
        'handlebars -a -m templates/> js/compiledTemplates.js'
    ])
);

/**
 * Build JS
 */
gulp.task('js', ['templates'], function() {

    return eventStream.merge(
        gulp.src(paths.requireJS),
        gulp.src(paths.scripts)
            .pipe(amdOptimize("main", {
                paths: {
                    "serializeObject": "bower_components/jQuery.serializeObject/dist/jquery.serializeObject.min",
                    "jquery" : "bower_components/jquery/dist/jquery",
                    "underscore" : "bower_components/underscore-amd/underscore",
                    "backbone" : "bower_components/backbone-amd/backbone",
                    "backbone-validation" : "bower_components/backbone-validation/dist/backbone-validation-amd"
                },
                shim: {
                    'serializeObject': {
                        deps: ['jquery'],
                        exports: 'jQuery.fn.serializeObject'
                    }
                }
            }))
            .pipe(concat("modules.js"))
    )
        .pipe(order(["**/require.js", "**/modules.js"]))
        .pipe(concat("app.min.js"))
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest( paths.build + "/js"));
});

/**
 * Build
 */
gulp.task('default', [ 'js']);