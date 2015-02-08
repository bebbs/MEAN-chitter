var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('js', function() {
  gulp.src(['angular/module.js', 'angular/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets'))
});