### Gulp 学习

> 安装好gulp之后就开始学习吧


##### 压缩JS

1. 步骤：

	* 首先在该目录下创建package.json 可以手动的创建，也可以自动创建 npm init 
	* 然后在该项目中安装gulp  npm install --save-dev gulp
	* 安装需要的gulp 插件 npm install --save-dev gulp-uglify   “--save-dev“ 是把用到的模块名保存在package.json里面， 如果别人拿去用的话，不需要打包整个的node_modules ，他只需要npm install 就可以安装相应的模块。
	* npm install 安装package.json里面的所有模块
	
2. 代码解释：

	* gulp.task() : 接收两个参数，第一个参数是任务名，第二个参数是任务的内容。
	* gulp.src(): 找到文件
	* gulp.pipe(): 暂时将pipe理解为操作加入执行队列，
	* gulp.dest(): 将输出的压缩好的文件放到该参数所指的目录下面
	
3. 执行
	* gulp + 任务名  执行后就会在制定的目录里面发现压缩好的js了。
	
4. 实时监听代码的变化

	* gulp.watch(): 参数1 是被监听的文件目录，参数2文件发生改变后是执行的函数



##### 压缩css

1. npm install --save-dev gulp-minify-css 其他的步骤跟压缩js 是一样的，


##### 压缩图片
1. npm install --save-dev gulp-imagemin

##### 编译less 

2. npm install --save-dev gulp-less

##### 一些其他的插件
	
1. gulp-util: 改变输出内容的颜色的
2. gulp-watch-path: 监听改变的文件的路径，跟watch的event合起来一起用的话，当监听的文件有改动的时候只需要更新改动的文件，而不是全部更新
3. stream-combiner2: 捕获文件运行中的错误




***********
未完成
***********









