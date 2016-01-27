import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import notify from 'gulp-notify';
import watchify from 'watchify';
import util from 'gulp-util';
import source from 'vinyl-source-stream';

gulp.task('js', build);
gulp.task('watch', watch);

function build () {
  rebundle(bundle());
}

function rebundle (bundler) {
  console.log('Bundling');
  let stream = bundler.bundle();
  let start = Date.now();
  stream.on('error', handleError);

  return stream.
    pipe(source('bundle.js')).
    pipe(gulp.dest('dist/js')).
    pipe(notify(function () {
      console.log('Rebundled in ' + (Date.now() - start) + 'ms');
    }));

  function handleError (err) {
    util.log(util.colors.red(err));
  }
}

function bundle () {
  return browserify({
      entries: './components/app',
      extensions: ['.js', '.jsx', '.json'],
      transform: [babelify],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    });
}

function watch () {
  watchJS();
  gulp.watch('dist/**', e => server.reload.notify(e.path, lr));
}

function watchJS () {
  let bundler = watchify(bundle());
  let rebundleApp = rebundle.bind(this, bundler);

  bundler.on('update', rebundleApp);
  rebundleApp();
  return bundler;
}