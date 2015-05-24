'use strict';
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('less', shell.task(['lessc ./styles/index.less > ./styles/style.css']));
gulp.task('default', ['less'], function() {
  gulp
    .watch(['styles/*.less'], ['less'])
    .on('error', function(err) { process.exit(1); });
});

gulp.task('build', shell.task(['browserify -e ./app/src/index.js -o ./app/bundle.js -t [ babelify --optional es7.decorators ]']));
