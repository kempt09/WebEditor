var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('jade', function() { // Use on CLI: gulp jade
    return gulp.src('./src/Views/*.jade').pipe(jade({pretty: true})).pipe(gulp.dest('./dist/'));
});

gulp.task('main', function () { // Use on CLI: gulp main
  return gulp.src('./src/CSS/main.stylus').pipe(stylus({compress: true})).pipe(gulp.dest('./dist/'));
});

gulp.task('js', function () {
	gulp.src('src/JS/*.js').pipe(jsmin()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./dist/'));
});

