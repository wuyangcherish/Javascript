## 异步编程

#### 函数式编程

###### 高阶函数
1. foreach() map() reduce() every() 等等都是高阶函数

###### 偏函数
1. 例如：

<pre>
	var isType = function(type){
		return function(obj){
			return toString.call(obj) == '[object +type+]';
		}
	}
	
	var isString = isType('String');
	var isFunction = isType('Function');
</pre>

###### 难点

1. 异常处理

	* 因为一部I/O实现是两个部分的：提交请求和处理请求，两者互不关联，所以在里面try catch 不能很好的捕获到后来传进来的数据的异常
		* 解决方法：将异常作为回调函数的第一个参数传回，如果为控制，则表示没有异常
			* function(err, result){}  这样子
			
2. 函数嵌套过深

	* 例如遍历一个目录的操作：
	<pre>
		fs.readdir(path.join(__dirname, '..'),function(err,files){
			files.forEach(function(filename,index){
				fs.readFile(filename,'utf8',function(err,file){
					//...
				})
			})
		})
	</pre>

3. 阻塞代码

	* JavaScript本身没有可以阻塞代码的sleep() 沉睡功能，唯一可以实现该功能的就是setTimeout()了
	
4. 多线程的问题：

	* Web workers，通过将JavaScript 执行与 UI 分离，很好的利用CPU
	 
