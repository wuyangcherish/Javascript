/*

    在 JS 中 只有函数具有作用域
    也就是说在一个函数体内的函数在外层函数的外部是无法访问到的
    
*/


function foo(){
    var a = 10;
    function bar(){
        a *= 2;
    }
    //立即执行函数bar
    bar();
    return a;
}
var x = foo();
/*
    >x
        20 
        第二次还是一样的数字 因为里面的函数立即执行了一次啊然后返回结果的
*/

function foo(){
    var a = 10;
    function bar(){
        a *= 2;
        return a;
    }
    //返回bar函数体
    return bar;
}

var x = foo();
/*
    >x
        function bar(){
        a *= 2;
        return a;
    }
    所以 foo()  其实就是相当于返回了里面的bar函数
    foo 返回后他的抓哟用于被保存了下来
    
    PS： 返回一个内嵌的函数是闭包最常见的方式
*/

x(); //20
x(); //40
x(); //60

//重新开启一个函数
var z = foo();
z(); //20

/*******************/

//闭包实现私有成员
function foo(){
    //private attribute
    var a = 10;
    var fruit = "apple";
    
    function bar(){
        a *= 10;
        return a + fruite;
    }
    
    return bar;
}
var x = foo();

/*
 
    > x
        bar(){
                a *= 10;
                return a + fruit;
            }
    >x();
        "100apple"
    >x();
        "1000apple"
    >x();
        "10000apple"
        
    a 和 fruit 都是foo 的私有变量外面无法访问到
    
*/


var Info = function(name, age){
    //私有变量
    var username = name;
    
    //共有变量
    this.age = age;
    
    //私有方法
    function getOther(){
        return others;
    }

    //共有方法
    this.getName = function(){
        //在这里调用私有的函数输出私有变量
        return username;
    }
}

/*
    上面的函数定义的有私有变量 公有的变量
    静态的方法 更有效率 ： 因为她只会被创建一份
    
*/


/*
    常量： 一些不能被修改的变量
*/

var Class = (function(){
    //常量
    var UPPER_BOUND = 100;
    
    //函数 私有的
    var ctor = function(constructorArgument){
        //..
    }
    
    //私有方法
    ctor.getUPPER_BOUND = function(){
        return UPPER_BOUND;
    };
    
    return ctor;
})

// 如果需要许多常量

var Class = (function(){
    
    //private static attrbuite
    var constants = {
        UPPER_BOUND: 100,
        lOWER_BOUND: 20
    };
    
    var ctor = function(constructorArgument){
        //...
    }
    
    ctor.getConstant = function(name){
        return constants[name];
    }
    
    return ctor;
})();

/*
    > Class
        function(constructorArgument){
            //...
        }
    > Class.getConstant("UPPER_BOUND")
        100
*/




















