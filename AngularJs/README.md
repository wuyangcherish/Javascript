### <font color="#FF8C00"> AngularJS学习 [适合单页面应用的开发]</font>

1. <font color="#FA8072">$scope:</font> 

    1. $scope 是一个把View 连接到Controller上面的对象
        > 在MVC中 $scope将成为model ，他提供一个绑定到DOM或者其他元素上面的excecution context
        
        * 即scope 就是一个js的对象，cntroller跟view都能访问它，利用scope 在两者之间可以传递消息
        * 在scope中有数据的存储，运行在View上的函数
        
    2. 每一个AngularJs应用都有一个 $rootScope 等同于$scope中的老大,对应的是 ng-app 指令属性绑定的DOM元素
        * 页面上的每一个$scope的对象都包含在rootScope里面 
        * 如果页面上没有设定 $scope Angular就会把数据和函数都绑定到这里
        
2. <font color="#FA8072">ng-controller:明确的创建一个对象 </font>

    1. ng-controller 所在的DOM元素创建了一个新的$scope 对象 并将这个$scope 对象包含到外层DOM元素的$scope里面
    2. 所有的 Scope 都遵循继承，意思就是说他们都能访问到父级 Scope 里面的任何方法和属性
        * 跟原型的继承一样的赶脚，在自己的属性或者方法上找不到才会去上一级查找，知道找到$rootscope上面
        * <font color="red">PS : 有一种例外叫做有些指令可以选择创建一个独立的scope不然他继承父类</font>
        
3. <font color="#FA8072">数据的绑定 && Ajax </font>

    1. $watch: 检测它监视的DOM 里面的变化，每绑定一些东西到 UI 上面的话就会产生在$watch队列上面插上一条
        * linking 阶段： Angular 解析器会寻找每个 directive 然后生成需要的 $watch
    2. $digest: 会遍历$watch 事件队列 询问有没有更新什么东东 有的话通知View 更新
        * 所谓的 dirty-checking --- 循环10次的话就会抛出一个异常来阻止无限循环
    3. $apply: 决定什么事件进入angular context 什么事件不进入
        * 点击带有ng-click的元素的时候,事件机会呗封装到一个 $apply 调用 
            * ng-model="foo"  --> 敲击键盘 f 则会 $apply({"foo":"f"})
            * 调用该函数的话可以<font color="red">强制执行一次</font> $digest 循环
            
4. <font color="#FA8072">指令属性</font>

    1. 其实就是绑定到DOM 元素上面的函数 他可以小勇方法 定义行为/绑定controller以及 $scope 对象
        * 浏览器解析DOM 元素的时候DOM 元素上面的指令属性会跟其他属性一样被解析
        * 如果一个 DOM 树上面有不止一个的指令 则他们会按照优先级执行
        
    2. ng-model: 跟controller 里面的 $scope model 绑定
        * 具体的实现原理是在这个值上面绑定了 $watch 函数来实现 model 和 view 的双向通信 【$watch 在 $digest 的事件循环里面】
    3. ng-repeat ： 循环加载DOM 
        * 支持键值对的格式(key.value) in person 这样呈现
    4. 表达式
        * 所有的表达式都在 scope 这个context里面执行 因此可以使用所有本地的 scope 变量
        * 如果一个表达式的执行导致类型或者引用出错 这些错误将不被抛出
        * 表达式里面不允许有if等条件语句
        * 可以接受一至多个的过滤器
5. <font color="#FA8072">factory / service / provider</font>

    1. factory: 可以认为是设计模式中的<font color="red">工厂模式 </font>. 就是提供一个方法,该方法返回一个对象的实例
        * 先定义一个对象 给这个对象添加属性和方法，然后返回这个对象
    2. service：可以认为是设计模式中的<font color="red">构造函数模式 </font>. 通过new 来进行实例化
        * 竖向和方法添加在this上面，不用显式的返回对象
    3. provider: 这个比较的神奇，必须要有一个 <font color="red">$get</font> 的方法， get 方法和factory的要求是一致的，即先定义一个对象在这个对象上添加属性和方法 
        * 当你想要在 service 对象启用之前，先进行模块范围的配置，那就应该用 provider。
    <pre>
        this.get = function(){}
        var instance = new provider();
        var provider = instance.$get();
    </pre>
    
---------------------------------------------------------

### <font color="#FF8C00"> AngularJS学习中遇到的问题</font>

<font color="#FA8072">1. angularjs 的 $http.jsonp 为什么后面有 callback=JSON_CALLBACK ?</font>

* jQuery 里面 ajax 使用jsonp 跨域的话写的方式是 <font color="#FF8C00">url: 'http://www.example.com/trace/app?callback=?'</font>
这样的.callback=? 
* 在angularJS 的jsonp 跨域这里有一句话：<em><font color="red">Relative or absolute URL specifying the destination of the request. The name of the callback should be the string JSON_CALLBACK.</font></em>

* 问题解决：
    1. url 中必须制定callback 和回调函数的名称 函数名为 <font color="red">JSON_CALLBACK</font>才会调用success的回调函数，都要大写啊。。。
    2. 如果要制定其他函数的回调， 必须是定义在window下面的全局函数
    3. callback为 JSON_CALLBACK 的时候只会调用success 即使window中有JSON_CALLBACK函数 也不会调用

* 参考文章：
    * [http://stackoverflow.com/questions/12066002/parsing-jsonp-http-jsonp-response-in-angular-js](http://stackoverflow.com/questions/12066002/parsing-jsonp-http-jsonp-response-in-angular-js)


---------------------------------------------------------

   
   * 