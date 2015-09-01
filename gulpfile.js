var gulp = require('gulp');
var defineModule = require('gulp-define-module');
var handlebars = require('gulp-handlebars');

gulp.task('templates', function() {
	gulp.src('templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(defineModule('amd'))
    .pipe(gulp.dest('js/templates/'));
});