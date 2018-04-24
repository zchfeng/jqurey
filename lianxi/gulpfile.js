var gulp = require('gulp');

var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-minify-css');
gulp.task('Htmlmin', function () {
	var options = {
		collapseWhitespace: true,//压缩HTML
	};
	gulp.src('src/*.html')
		.pipe(htmlmin(options))
		.pipe(gulp.dest('dis'));
});

gulp.task('Cssmin', function () {
	gulp.src('src/css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('dis/css'));
});
gulp.task("default",["Htmlmin",'Cssmin'])