var gulp = require("gulp"),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    stylish = require('gulp-tslint-stylish'),
    sourcemaps = require('gulp-sourcemaps'),
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
    .pipe(tslint.report(stylish, { bell: false }));
});

gulp.task('ts:watch', function() {
  return gulp.watch(config.typescript, ['ts:compile']);
});
