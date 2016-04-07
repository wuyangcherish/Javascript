var gulp = require("gulp");

//配置终端显示的颜色
var gutil = require("gulp-util");

gulp.task('default', function(){
	gutil.log("message");
	gutil.log(gutil.colors.red("error"));
	gutil.log(gutil.colors.green("message")+"some")
})


//检测src/js 文件修改之后 压缩js中的文件 输出到build/js 中

var uglify = require("gulp-uglify");

gulp.task('uglifyjs', function(){
	gulp.src("src/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
})

gulp.task('default', function(){
	gulp.watch('src/js/*.js', ['uglifyjs'])
})

//利用gulp-watch-path 配合event来获取编译的路径和输出的路径 
//以防 watch 一次就要将所有的文件都重新编译一次

var watchPath = require("gulp-watch-path");

gulp.task('watchjs', function(){

	//实时监听
	gulp.watch('src/js/*.js', function(event){

		var paths = watchPath(event, 'src/', 'build/');

		//path
		// { srcFilename: 'a.js',
		//   distFilename: 'a.js',
		//   srcPath: 'src/js/a.js',
		//   srcDir: 'src/js',
		//   distPath: 'build/js/a.js',
		//   distDir: 'build/js' }
		// { srcFilename: 'a.js',
		//   distFilename: 'a.js',
		//   srcPath: 'src/js/a.js',
		//   srcDir: 'src/js',
		//   distPath: 'build/js/a.js',
		//   distDir: 'build/js' }

		//输出被改动的文件路径
		gutil.log(gutil.colors.green(event.type)+ "" + paths.srcPath);
		//输出文件被压缩的路径
		gutil.log("Dist："+ paths.distPath);

		gulp.src(paths.srcPath)
			.pipe(uglify())
			.pipe(gulp.dest(paths.distDir))
	})

})




/*
	接下来是css的压缩
*/

var minifycss = require("gulp-minify-css");

gulp.task('watchcss', function(){
	gulp.watch('src/css/*.css', function(event){

		var paths = watchPath(event, 'src/', 'build/');
		gutil.log(gutil.colors.green(event.type) + " "+ paths.srcPath);
		gutil.log('Dist '+ paths.distPath);

		gulp.src(paths.srcPath)
			.pipe(minifycss())
			.pipe(gulp.dest(paths.distDir))
	})
})

//配置less 文件

var less = require("gulp-less");
gulp.task('watchless', function(){

	gulp.watch('src/less/*.less', function(event){

		var paths = watchPath(event, 'src/less/', 'build/css');
		gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)


	})
})


gulp.task("default", ['watchjs','watchcss','watchless'])


































