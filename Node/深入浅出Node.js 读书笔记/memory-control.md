## 内存控制

###### V8 的垃圾回收机制 & 内存限制

1. 在 V8 中，所有的JavaScript 代码都是通过 堆 来进行分配的。

	* V8 内存使用量查看方式:
	
	<pre>
		$ node 
		> process.memoryUsage();
		{ rss: 21516288,
		  heapTotal: 7442016,
		  heapUsed: 4690440 
		 }
	</pre>
	
	其中： heapTotal: 是已经申请到的堆内存
		  heapUsed: 当前使用量

2. V8 做一次垃圾回收需要 50ms 以上，做一次非增量式的垃圾回收至少 1s 以上。所以当初设计的时候限制了堆的大小。
	* 调整内存的大小
		
		* node --max-old-space-size=1700 test.js  //单位是 MB
		* 或者 node --max-new-space-size=1024 test.js //单位是 KB
		
3. V8 的垃圾回收算法
	* 策略主要是：基于分代式垃圾回收机制，因为没有一种算法可以满足所有的垃圾回收场景，所以只能根据实际的情况，分别对不同的内存施以更高效的算法
	* V8 的内存分代
		* 新生代 && 老生代
		* 这两个内存需要在node启动之前就定好，也就是说不能根据执行的情况进行自动扩充，当内存分配超过配置值得时候就会引起进程错误
			* 新生代主要用 Scavenge 算法
				* 采用复制的形式实现的，所以只能使用堆内存的一半，但是因为只复制存活的对象，所以在时间效率上比较好
			* 新生代存活周期很长之后就会对象晋升，存在常驻内存中去，【老生代内存】
				* 条件有两个： 1. 是否经历过 Scavenge 的回收。2. To 空间的内存占用是否超过限制
			* 老生代主要采用 Mark-Sweep 
				* Mark-Sweep 在标记堆中存活着的对象， 只清理没有被标记的对象，也就是死对象。 
					* 缺点造成不连续的内存，当碰到一个大的时候的对象时候，就会提前触发垃圾回收
				* Mark-Compact 在上面的基础下演化而来的
					* 会在移除四内存之后将会的内存移动，防止出现内存的碎片化
					
###### 高效使用内存

1. 作用域

	* 标识符查找
	* 作用域链查找，有限查找该作用域内，其次是在网上查找
	* 变量的主动释放 释放常驻内存可以通过 delete 操作来删除引用关系，或将变量重新赋值
	
	<pre>
	global.foo = "I am global object";
	console.log(global.foo) //“I am global object”
	delete global.foo;
	//或者重新赋值
	global.foo = "undefined";
	console.log(global.foo);  => undefined
	</pre>
2. 闭包

	* 实现外部作用域访问内部作用域中变量的方法叫做"闭包"。函数可以作为参数或者返回值
	<pre>
	var foo = function(){
		var bar = function(){
			var local = "局部变量";
			return function(){
				return local;
			};
		};
		var baz = bar();
		console.log(baz());
	}
	//这样的写法就不会导致local 获取不到了
	</pre>
	
	* 在正常的 JavaScript 执行中，无法立即回收内存中有闭包和全局变量引用这两种情况，由于 V8 的内存限制，要十分小心此类变量是否无限制的增加，它会导致老生代的对象越来越多
	
###### 内存指标

1. 查看内存使用的情况
	<pre>
	\> process.memoryUsage()
     { rss: 21286912, heapTotal: 9472608, heapUsed: 4646784 }
	</pre>
	* rss -> 常驻内存部分
	* heapTotal & heapUsed -> 堆内存申请的内存量和使用的内存量

###### 内存泄漏
1. Node对内存泄漏十分的敏感 哪怕是一个字节的泄露也会曹成内存堆积，垃圾回收过程中会将会耗费更多的时间进行对象的扫描，应用响应缓慢
2. 通常泄露的原因有：
	* 缓存
	* 队列消费不及时
	* 作用域未释放
 
