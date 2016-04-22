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