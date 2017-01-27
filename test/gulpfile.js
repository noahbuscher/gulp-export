'use strict';

const sourceDir = './src';
const buildDir = './build';

const Del = require('del');
const Gulp = require('gulp');
const Export = require('../index');

Gulp.task('clean', cb => {
    return Del([buildDir], cb);
});

Gulp.task('export', ['clean'], () => {
    return Gulp.src([`${sourceDir}/**/*.js`, `!${sourceDir}/index.js`])
        .pipe(Export({context: './src'}))
        .pipe(Gulp.dest(buildDir));
});

Gulp.task('default', ['clean', 'export']);