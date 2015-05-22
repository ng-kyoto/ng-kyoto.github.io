'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('less', shell.task(['lessc ./styles/index.less > ./styles/style.css']));
gulp.task('default', ['less'], function() {
  gulp
    .watch(['styles/*.less'], ['less'])
    .on('error', function(err) { process.exit(1); });
});
