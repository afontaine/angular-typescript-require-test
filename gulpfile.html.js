var gulp = require('gulp'),
    gulpConfig = require('./gulpfile.config');

var config = new gulpConfig();

gulp.task('html:compile', function () {
  return gulp.src(config.html).pipe(gulp.dest(config.build));
});

gulp.task('html:watch', function () {
  return gulp.watch(config.html, ['html:compile']);
});
