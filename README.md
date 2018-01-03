# gulp-webvsc

[![npm](https://img.shields.io/npm/l/gulp-webvsc.svg?style=flat-square)](https://www.npmjs.org/package/gulp-webvsc)
[![npm](https://img.shields.io/npm/v/gulp-webvsc.svg?style=flat-square)](https://www.npmjs.org/package/gulp-webvsc)
[![npm](https://img.shields.io/npm/dm/gulp-webvsc.svg?style=flat-square)](https://www.npmjs.org/package/gulp-webvsc)
[![Travis](https://img.shields.io/travis/idleberg/gulp-webvsc.svg?style=flat-square)](https://travis-ci.org/idleberg/gulp-webvsc)
[![David](https://img.shields.io/david/idleberg/gulp-webvsc.svg?style=flat-square)](https://david-dm.org/idleberg/gulp-webvsc)
[![David](https://img.shields.io/david/dev/idleberg/gulp-webvsc.svg?style=flat-square)](https://david-dm.org/idleberg/gulp-webvsc?type=dev)

Gulp plugin to convert [Winamp AVS presets](https://www.wikiwand.com/en/Advanced_Visualization_Studio) into [Webvs](https://github.com/azeem/webvs) JSON.

## Installation

```sh
# npm
$ npm install gulp-webvsc

# Yarn
$ yarn add gulp-webvsc
```

## Usage

```js
const gulp = require('gulp');
const webvsc = require('gulp-webvsc');

// Gulp v4
gulp.task('lint', (done) => {
  gulp.src('**/*.avs')
  .pipe(webvsc());

  done();
});

// Gulp v3
gulp.task('lint', function () {
  return gulp.src('**/*.avs')
    .pipe(webvsc());
});
```

## Options

### minify

Type: `boolean`
Default: `false`

Minify generated JSON

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/gulp-webvsc) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`