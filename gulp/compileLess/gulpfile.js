var gulp = require("gulp");

var less = require("gulp-less");

gulp.task('less', function(){

	gulp.src("less/*.less")

		.pipe(less())

		.pipe(gulp.dest('build/css'))
})

gulp.task('auto', function(){

	gulp.watch('less/*.less', ['less'])
})

//gulp 启动
gulp.task('default', ['less','auto'])