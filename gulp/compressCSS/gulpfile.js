var gulp = require('gulp');

var minifyCSS = require('gulp-minify-css');

gulp.task('css', function(){
	gulp.src("css/*.css")
	
	.pipe(minifyCSS())

	.pipe(gulp.dest('build/css'))
})

gulp.task('auto',function(){

	gulp.watch('css/*.css',['css'])

})


// 有下面的这句话的话就是说直接使用gulp 不加任务名的话默认会启动这个任务
gulp.task("default", ['css','auto']);