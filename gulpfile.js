var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');

gulp.task('jade', function() { // Use on CLI: gulp jade
    return gulp.src('./src/Views/*.jade').pipe(jade({pretty: true})).pipe(gulp.dest('./dist/'));
});

gulp.task('style', function () { // Use on CLI: gulp main
  return gulp.src('./src/CSS/main.stylus').pipe(stylus({compress: true})).pipe(gulp.dest('./dist/'));
});

