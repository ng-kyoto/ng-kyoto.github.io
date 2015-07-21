'use strict';
import gulp from 'gulp';
import shell from 'gulp-shell';
import seq from 'run-sequence';

const path = {
  app: `./app`,
  styles: `./app/common-styles`,
  bin: `./node_modules/.bin`
}

const bin = {
  tsc: `${path.bin}/tsc`,
  lessc: `${path.bin}/lessc`,
  browserify: `${path.bin}/browserify`,
  watchify: `${path.bin}/watchify`
};

gulp.task('less', shell.task([`${bin.lessc} ${path.styles}/index.less > ./style.css`]));

const tsc = `${bin.tsc} -t es5 -m commonjs --experimentalDecorators --emitDecoratorMetadata --suppressImplicitAnyIndexErrors`
gulp.task('ts', shell.task([`find ${path.app} -name "*.ts" | xargs ${tsc}`]));

gulp.task('default', ['less'], () => {
  gulp
    .watch([`${path.app}/**/*.less`], ['less'])
    .on('error', err => process.exit(1));
});

const babelify = `[ babelify --optional es7.decorators ]`;
gulp.task('browserify', shell.task([`${bin.browserify} -e ${path.app}/index.js -o ./bundle.js -t ${babelify}`]));
gulp.task('watchify',   shell.task([`${bin.watchify}   -e ${path.app}/index.js -o ./bundle.js -t ${babelify} -v`]));
gulp.task('build', done => seq(['ts', 'less'], 'browserify', done));
gulp.task('_watch', ['ts', 'less'], () => {
  gulp
    .watch([`${path.app}/**/*.ts`],   ['ts'])
    .on('error', err => process.exit(1));

  gulp
    .watch([`${path.app}/**/*.less`], ['less'])
    .on('error', err => process.exit(1));
});

gulp.task('watch', done => seq('_watch', 'watchify', done));
