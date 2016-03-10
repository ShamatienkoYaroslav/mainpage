'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./src/sass/stylesheet.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./out/'))
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
