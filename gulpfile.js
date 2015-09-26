/*global require */

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    del = require('del'),
    gulpConfig = require('./gulpfile.config');

require('./gulpfile.ts');
require('./gulpfile.scss');
require('./gulpfile.html');

var config = new gulpConfig();

gulp.task('components:compile', function() {
  return gulp.src(config.source + config.bower + '**/*').pipe(gulp.dest(config.build + config.bower));
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
