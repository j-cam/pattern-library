'use strict';

var gulp = require('gulp');
var size = require('gulp-size');
var config = require('../tasks.config.json');




gulp.task('pattern-presentation:copy', function () {

    return gulp.src(config.patternPresentation.copy)
    .pipe(gulp.dest(config.patternPresentation.dest));
});