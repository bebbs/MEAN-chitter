var gulp = require('gulp');
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
});

gulp.task('watch:js', ['js'], function() {
  gulp.watch('angular/**/*.js', ['js'])
});

gulp.task('watch:css', ['js'], function() {
  gulp.watch('css/**/*.styl', ['css'])
});

gulp.task('dev', ['watch:js', 'watch:css', 'dev:server']);














