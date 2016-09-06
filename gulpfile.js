var gulp = require('gulp');
var browserity = require('browserify');
var babelity = require('babelify')
var source = require('vinyl-source-stream');
var React = require('react');
var ReactDOM = require('react-dom');

gulp.task('default', function(){
    return browserity('./source/app.js')
            .transform(babelify)
            .bundle()
            .pipe(source('snapterest.js'))
            .pipe(gulp.dest('./build/'));
});