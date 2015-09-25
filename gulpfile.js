/*global require */

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    scss = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    del = require('del'),
    gulpConfig = require('./gulpfile.config'),
    tsProject = tsc.createProject('src/tsconfig.json');

var config = new gulpConfig();

gulp.task('ts:compile', ['ts:lint'], function () {
  return gulp.src(config.typescript)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject)).js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.javascript));
});

gulp.task('ts:lint', function () {
  return gulp.src(config.typescript)
    .pipe(tslint())
    .pipe(tslint.report('prose'));
});

gulp.task('ts:watch', function() {
  return gulp.watch(config.typescript, ['ts:compile']);
});

gulp.task('html:compile', function () {
  return gulp.src(config.html).pipe(gulp.dest(config.build));
});

gulp.task('html:watch', function () {
  return gulp.watch(config.html, ['html:compile']);
});

gulp.task('components:compile', function() {
  return gulp.src(config.source + config.bower + '**/*').pipe(gulp.dest(config.build + config.bower));
});

gulp.task('scss:compile', ['scss:lint'], function () {
  return gulp.src(config.scss)
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.css));
});

gulp.task('scss:lint', function () {
  return gulp.src(config.scss).pipe(scsslint());
});

gulp.task('scss:watch', function () {
  return gulp.watch(config.scss, ['scss:compile']);
});

gulp.task('compile', ['components:compile', 'html:compile', 'ts:compile', 'scss:compile']);

gulp.task('watch', ['html:watch', 'ts:watch', 'scss:watch']);

gulp.task('serve', ['compile', 'watch'], function () {
  connect.server({
    root:'dist'
  });
});

gulp.task('clean', function () {
  del('./dist');
});

gulp.task('default', ['serve']);
