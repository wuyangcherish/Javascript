#####  call apply bind 总结一些自己以前没搞懂的问题
  
1. 首先是用法上面：
    * func.call(this, arg1, arg2);
    * func.apply(this, [arg1, arg2])
        * 参数不确定的时候用apply,然后用argumemts来遍历。 参数确定的时候用call
    * bind() 会创建一个新的函数，称为绑定函数
        * 当调用这个绑定函数的时候，绑定函数会创建
2. 数组之间的追加----意思是在array1上面可以用push 的方法将array2里面的东西push到array1里面
<pre>
    > var arr1 = [12,34,56,"front","back"]
    > var arr2 = ['left', 'and ','right']
    > Array.prototype.push.call(arr1,arr2)
    < 6  输出的是arr1改变后的长度
    > arr1
    < [12, 34, 56, "front", "back", Array[3]] 
        // Array[3]::[0: "left"1: "and "2: "right"length: 3__proto__: Array[0]]
</pre>
    
    * 从这个来看这样相追加后的结果是一个而为的数组 而不是把arr2 里面的东西一个个push进arr1里面的。比如访问"and" 的话需要的是 arr1[5][1] 这样来访问
    <font color="red">PS: 如果想要将arr2里面的依次放到arr1里面用 concat </font>
    
3. 获取数字的最大值---numbers本身没有这个max的方法， 借助call apply改变其this的指向
<pre>
    var  numbers = [5, 458 , 120 , -215 ]; 
    var maxInNumbers = Math.max.apply(Math, numbers),   //458
    maxInNumbers = Math.max.call(Math,5, 458 , 120 , -215); //458
</pre>

4. 验证是否是数组
<pre>
    function isArray(obj){
        return Array.prototype.toString.call(obj) === '[object Array]'
    }
</pre>
    *　当然也有用obj instanceof Array 来判断的obj是不是个数组的
    * ECMAscript5 里面有一个是isArray的方法也可以用来判断
5. 伪数组改变为真正的数组
    * 伪数组:　有length的属性可以用来遍历但是该伪数组上面没有数组上面的方法 例如push shift等， 例如： 页面上获取到的节点的集合NodeList就是个伪数组, 传入的参数arguments也是一个伪数组
<pre>
    Array.prototype.slice.call(nodelist) 调用slice的方法将其分割为真正的数组
</pre>
   
6. 将一个字符串转化为数组
<pre>
    var str2arr = Array.prototype.slice.call(str);
    var str2arr = str2arr.split("");
</pre>
    * 顺带说一下数组转化为字符串吧
        * var arr2str = Array.prototype.join.call(arr);
        * var arr2str = arr2str.join("");
    * 好吧还是感觉直接转比较顺利 从Array上面瞅瞅只是为了看看call怎么搞而已
7. 定义一个log的方法让它可以代理console.log
    * 将自己定义的方法的this指向console 
<pre>
    function log(){
        console.log.apply(console, arguments)
    }
    log("a") //a
    log("a","b") //a b
</pre>
    * 每次输出的前面带上一个"你好"
    * 不能直接写  console.log.apply(console, "你好"+arguments) //因为arguments是个伪数组 这样的话会报错哦
<pre>
    function log(){
        var args = Array.prototype.slice.call(arguments); //转化为数组
        args.unshift("你好"); //数组的前面加上的"你好"
       
        console.log.apply(console, args);   
    }
    log(12,34,5) //你好 12 34 5
</pre>
   
8. bind() 方法---bind会产生一个新函数，称为绑定函数，当调用这个绑定函数的时候，绑定函数会以创建它时传入bind()方法的第一个参数作为this，第二位以后的[包括第二位]都是参数
  * 常见的单体模式中会使用 _this that self 等保存this 以便在改变了上下文之后继续引用它
<pre>
    var foo = {
        bar: "foo 1",
        btnBind: function(){
            var that = this; //这里的this指的是foo 的context 所以this的指向是foo
            console.log(this.bar) //"foo 1"
            $("#btn").click(function(){
                console.log(this.bar) //undefined 上下文已经改变了  this指向的是 $("#btn");
                console.log(that.bar)  //"foo 1"  还是可以获取到的 
            })   
        }
    }
</pre>
   
9. bind还有一个用处是跟call apply一样
<pre>
    var foo = {};
    foo.x = "hello world"
    var bar = function(){
        console.log(this.x);
    }
    bar(); //undefined
    var func = bar.bind(foo); //foo 指向了bar bar是一个函数表达式
    func(); //hello world  func() 现在相当于 bar(), 但是它可以访问到foo 上面的属性
</pre>
    
    * bind 的话无论连续绑定几次，都只是第一次生效
    * call apply都是改变上下文之后立即调用的 bind只是返回对应的函数,便于稍后调用
10. caller : functionName.caller 返回对一个函数的引用,该函数调用了当前函数 ---<font color="red">这个不是很懂 以后懂了再补充</font>
11. callee : 调用的是当前正在执行的函数 
<pre>
    function fib(n){
        if(n>==1){
            return 1;
        }else{
            return n* arguments.callee(n-1)
        }
    }
</pre>