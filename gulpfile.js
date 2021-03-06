// Dependencies
const gulp = require('gulp');
const debug = require('gulp-debug');
const eslint = require('gulp-eslint');
const jsonlint = require('gulp-jsonlint');

// Lint JavaScript files
gulp.task('eslint', (done) => {
  gulp.src(['index.js', 'test/test.js'])
  .pipe(debug({title: 'eslint:'}))
  .pipe(eslint())
  .pipe(eslint.failAfterError());

  done()
});

// Lint JSON files
gulp.task('jsonlint', (done) => {
  gulp.src(['./*.json'])
  .pipe(debug({title: 'jsonlint:'}))
  .pipe(jsonlint())
  .pipe(jsonlint.reporter());

  done()
});

// Tasks
gulp.task('default', gulp.parallel('eslint', 'jsonlint', (done) => {
  done();
}));
