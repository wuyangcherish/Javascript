### Node

##### 查阅的文章：

* [https://sfantasy.gitbooks.io/node-in-action/content/zh/npm-package/validator.html](https://sfantasy.gitbooks.io/node-in-action/content/zh/npm-package/validator.html)

* [http://wwsun.github.io/posts/nodejs-interview-questions.html](http://wwsun.github.io/posts/nodejs-interview-questions.html)

* [http://www.ituring.com.cn/article/199288](http://www.ituring.com.cn/article/199288)

* [http://taobaofed.org/tags/Node%E5%9C%B0%E4%B8%8B%E9%93%81/](http://taobaofed.org/tags/Node%E5%9C%B0%E4%B8%8B%E9%93%81/)

##### 遇到的问题：

1. install Refusing to install colors as a dependency of itself

	* 这是我安装colors 的时候遇到的错误
	* 因为我学习该 colors 的插件所以顺手将文件的名称也命名成了 colors ，npm init 的时候packgae.json 里面的 name 就是这个colors 导致 colors 的插件安装出现了问题
	* 这是个以后要注意的点， 不要将文件夹的名字命名成插件的名字
	


##### 插件

1. colors: 让终端的输入变得有颜色.

	具体的使用见文档:[https://github.com/marak/colors.js/](https://github.com/marak/colors.js/)
	
2. mocha :测试工具

	* 运行mocha  直接是调用文件下面 test/test.js所以如果该文件直接运行mocha会报错, 但是不影响其他文件使用这个东东
	* mocha 只是在终端运行检测问题的一个插件，但是至于怎么写就是看引入的是什么库的问题了。
		* chai should.js expect.js 等， 它可以兼容好多的库
		* [http://mochajs.org/](http://mochajs.org/)

3. should : 同步代码[Synchronous Code]
	* 当测试同步代码的时候，省略 callback mocha 会自动逐行执行
	* API [https://www.npmjs.com/package/should](https://www.npmjs.com/package/should)
	
	* 当测试异步代码的时候，也很简单的.档案成的时候调用一个callback 通过 add 一个回调函数在it() 里面，Mocha 就知道这个测试需要等到回调结束才可以完成。
	
4. chai : [http://chaijs.com/](http://chaijs.com/)
5. promise : 异步编程的东东



