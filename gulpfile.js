var gulp = require('gulp');
var del = require('del');
var run = require('gulp-run');
var concat = require('gulp-concat');
var addsrc = require('gulp-add-src');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

// still need to annotate config and link to app.js

gulp.task('default', ['build']);

gulp.task('build', function(){
  runSequence('clean',
              'js',
              'watch'
            );
})

gulp.task('clean', function(){
  del('dist');
});

gulp.task('js', function(){
  return gulp.src('config/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('config/*', ['build'])
})