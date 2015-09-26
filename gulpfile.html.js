var gulp = require('gulp'),
    html5Lint = require('gulp-html5-lint'),
    gulpConfig = require('./gulpfile.config');

var config = new gulpConfig();

gulp.task('html:compile', function () {
  return gulp.src(config.html).pipe(gulp.dest(config.build));
});

gulp.task('html:watch', function () {
  return gulp.watch(config.html, ['html:compile']);
});
