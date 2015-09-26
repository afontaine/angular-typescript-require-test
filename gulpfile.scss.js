var gulp = require('gulp'),
    scss = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpConfig = require('./gulpfile.config');

var config = new gulpConfig();

gulp.task('scss:lint', function () {
  return gulp.src(config.scss).pipe(scsslint());
});

gulp.task('scss:compile', ['scss:lint'], function () {
  return gulp.src(config.scss)
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.css));
});

gulp.task('scss:watch', function () {
  return gulp.watch(config.scss, ['scss:compile']);
});
