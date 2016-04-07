var gulp = require('gulp');

var imagemin = require("gulp-imagemin");

gulp.task('image', function(){

	gulp.src('pic/*.*')

		.pipe(imagemin({
			progressive: true
		}))

		.pipe(gulp.dest('build/imgs'))
})

gulp.task('auto', function(){

	gulp.watch('pic/*.*', ['image'])
})

//gulp 直接启动
gulp.task("default", ['image', 'auto']);