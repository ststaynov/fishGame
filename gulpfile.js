/**
 * Created by ststa on 11/27/2016.
 */


var gulp = require('gulp');
var sass = require('gulp-sass');
var util = require('gulp-util');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('styles', function() {
    return gulp.src('static/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError('SASS is mad: <%= error.message %>')
        }))
        .pipe(sass())
        .pipe(gulp.dest('static/css/'))
        .on('error', util.log);
});

//Watch task
gulp.task('default',function() {
    gulp.run('styles');
    gulp.watch(['static/scss/*.scss','static/css/*.scss'],['styles']);
});


//gulp.task('compress-js', function() {
//  return gulp.src('animations/static/animations/js/main.js')
//    .pipe(uglify())
//    .pipe(rename({suffix: '.min'}))
//    .pipe(gulp.dest('animations/static/animations/js/'));
//});
//
//gulp.task('compress-css', function() {
//	gulp.src('animations/static/animations/css/base.css')
//		.pipe(cssmin())
//		.pipe(rename({suffix: '.min'}))
//		.pipe(gulp.dest('animations/static/animations/css/'));
//});
//
//gulp.task('compress', function() {
//    gulp.run('compress-css');
//    gulp.run('compress-js');
//});