let run = require('tape-run');
let browserify = require('browserify');

browserify(__dirname + '/curve-test.js')
  .bundle()
  .pipe(run())
  .pipe(process.stdout);
