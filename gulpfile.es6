'use strict';
import gulp from 'gulp';
import shell from 'gulp-shell';

const path = {
  app: `./app`,
  styles: `./app/common-styles`
}

const bin = {
  less: `lessc`,
  browserify: `browserify`,
  babelify: `babelify`
};

gulp.task('less', shell.task([`${bin.less} ${path.style}/index.less > ./style.css`]));
gulp.task('default', ['less'], () => {
  gulp
    .watch([`${path.style}/*.less`], ['less'])
    .on('error', err => process.exit(1));
});

const babelify = `[ ${bin.babelify} --optional es7.decorators ]`;
gulp.task('build', shell.task([`${bin.browserify} -e ${path.app}/index.js -o ./bundle.js -t ${babelify}`]));
