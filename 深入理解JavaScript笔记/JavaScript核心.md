## JavaScript 核心

#### 对象Object

<pre>
	var foo = {
		x:10,
		y:20
	}
</pre>

* 上述的对象 object 中 有两个显式声明的属性x,y 还有一个隐式声明的属性 <code>  \_\_proto\_\_</code> 的属性。这个属性指向foo 的原型
<code>foo.\_\_proto\_\_ == foo.constructor.prototype</code>


#### 原型链

* 原型也是普通的对象，并且也有可能有自己的原型，如果一个对象的原型不为null 的话，我们就称之为“原型链”【prototype chain】

<pre>
	var a = {
		x: 10,
		caculate: function(z){
			return this.x + this.y +z
		}
	};
	
	var b = {
		y: 20,
		__proto__:a
	}
	var c = {
		y:30,
		__proto__:a
	}
	// 调用
	b.caculate(30);
	c.caculate(40);
	
	
	//结果是：
	> b
    Object {y: 20}
	> b.__proto__
	Object {x: 10 ...}
	> b.constructor
	Object() { [native code] }
	> b.constructor.prototype
	Object {}
	> b.calculate(30);
	60
	
	>a.__proto__
	Object {}
</pre>

* 如果对象b 中找不到 caculate 的方法，那么就顺着它的原型链向上查找，直到遍历完整个原型链
* this 在继承机制中，仍然指向的是它原本属于的对象，所以b c 的this.y 分别指的是它们内部的 y 值
* 如果一个对象的值没有被显式的声明，那么它的__proto__ 指向的是Object 


#### 构造函数

<pre>
	function Foo(y){
		this.y = y;
	}

	Foo.prototype.x = 10;
	Foo.prototype.caculate = function(z){
		return this.x+this.y+z ;
	}

	//使用foo 创建 “b” & "c"

	var b = new Foo(20);
	var c = new Foo(30);

	b.caculate(30);
	c.caculate(40);
	
	
	> b.__proto__ 
	Object {x: 10}
	> Foo.prototype
	Object {x: 10}
	> b.__proto__ === Foo.prototype
	true	
	
	> c.constructor
	Foo(y){
		this.y = y;
	}
	> b.constructor
	Foo(y){
		this.y = y;
	}
	> Foo.prototype.constructor
	Foo(y){
		this.y = y;
	}
	> b.calculate === b.__proto__.calculate
	true
	> b.__proto__.calculate === Foo.prototype.calculate
	true
</pre>


#### 执行上下文栈[Execution Context Stack]

* 代码有三种类型： global function eval
* 每一种的执行都需要依赖自身的上下文。global可能涵盖很多的function和eval 的实力，函数每一次调用。都会进入函数执行中的上下文， eval 的每一次执行也会进入到eval执行中的上下文
* 一个函数可能产生无限的上下文环境，因为一个函数的调用(甚至递归)都产生一个新的上下文环境
<pre>
	function foo(bar){ .. code here ..}
	foo(19);
	foo(99);
	foo(9000);
</pre>

* 一个执行上下文可以激活另一个上下文，比如一个函数调用了另一个函数， 然后一层层的调用了下去，这种实现方式是“栈” 【上下文堆栈】
	* 激活其他上下文的某个上下文叫 -- 调用者 caller
	* 被激活的 -- callee
	* 被调用者也许同时也是调用者 -- 在一个全局上下文中的被调的函数调用了某些自己的方法
	* caller 调用 callee -> caller暂停 把控制权交给 callee -> callee 执行完毕将控制权交给 caller -> caller 继续执行
	
	
#### 执行上下文

* 三个属性： **变量对象**， **this指针**， **作用域链**

###### 变量对象：

* ECMAScript 对象和其他的语言相比较，只有函数能够创建新的作用域。在函数内部定义的变量或内部函数，在外部非直接可悲访问， 这样防止了污染全局变量。eval 也是这样的情况

###### 活动对象
<pre>
	function foo(x,y){
		var z = 100;
		(function bar(){})  //函数表达式
		function bar(){} //函数声明
	}
	foo(10,20);
	
	//它的激活对象是：
	x: 10
	y: 20
	arguments : {0:10,1:20..}
	z:100
	bar : <function>
</pre>

**Pay attention** : 函数表达式[function expression]不在激活对象的行列

###### 作用域链【Scope Chains】

* 作用域链是一个 对象列表 用以检索上下文代码中出现的  标识符
* 标识符： 可以理解为变量名称,函数声明和普通参数
* 当查找标识符的时候，会从作用域链的活动对象部分开始查找，如果未找到则查找作用域链的顶部，循环往复，就像作用域链那样
<pre>
	var x = 10;
	(function foo(){
		var y = 20;
		(function bar(){
			var z = 10; 
			//x,y 是自由变量
			console.log(x+y+z);
		})()
	})();
</pre>

* with 会增大作用域链 里面的this 指向 window 

###### 闭包

* 函数执行
<pre>
	function foo(){
		var x = 10;
		return function bar(){
			console.log(x);
		}
	}
	
	var f1 = foo();
	var x = 20;
	f1();
	
	//返回的是 x:10;
</pre>


* 函数以参数传入
<pre>
	var x = 10;
	
	function foo(){
		console.log(x);
	}
	
	(function(funArg){
		var x = 20;
		
		//调用参数
		funArg();
	})(foo);
	
	注意： 这里面传入的参数是外部的 foo 函数,这个函数输出的结果是x:10 而不是20, 因为这个立即执行函数的内部 this-> window
</pre>

* 闭包是一系列代码块（JavaScript里面的函数） 并且静态保存所有腹肌的作用域，通过这些保存的作用域来搜寻函数中用到的 自由变量

* 一个闭包中变量的变化，也会影响另一个闭包的变化
<pre>
	function baz(){
		var x =1;
		return {
			foo: function(){return ++x;}
			bar: function(){return --x;}
		}
	}
	var closures = baz();
	console.log(
		closures.foo();
		closures.baz();
	)
	
	//2 1
</pre>

###### this指针
* this 是和指向的上下文息息相关的一个特殊的对象。也可称为上下文对象 **它是执行上下文的一个属性，而不是某个变量对象的属性**  

  	* 在全局上下文中，this的值就是指全局这个对象，在Javascript 中值得是window 这个对象
	* 在一个函数中的上下文中，this的值可能根据每次调用者的不同为成为不同的值。 this 每次都会是调用者[caller] 提供


















