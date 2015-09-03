var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('templates', shell.task([
        'handlebars -a -m templates/> js/compiledTemplates.js'
    ])
);