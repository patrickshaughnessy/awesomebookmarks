'use strict';

var gulp = require('gulp');
var del = require('del');
var run = require('gulp-run');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

// still need to annotate config and link to app.js

gulp.task('default', ['clean', 'js']);

gulp.task('build', function(){
  runSequence('clean',
              'js'
            );
})

gulp.task('clean', function(){
  del('dist');
});

gulp.task('js', function(){
  console.log('in js');
  return gulp.src('./config/*.js')
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function(){
  gulp.watch('config/*', ['build'])
})
