/*
    单体模式
*/

var Corp = {};

//立即执行函数
Corp.Singleton = (function(){
    
    //私有变量
    var privateAttr1 =  false;
    var privateAttr2 = [1,2,3];
    
    //私有方法
    function privateMethod(){
        //....
    }
    
    function privateMethod2(){
        //...
    }
    
    //返回的接口
    return{
        publicAttr1: privateAttr1,
        publicAttr2: privateAttr2,
        
        publicMethod: function(){
            return privateMethod();
        },
        
        publicMethod2: function(){
            return privateMethod2();
        }
    }
    
})();  

//调用Corp.Singleton 的话直接就是返回的这些public 的接口 

// 私有的属性是没办法访问到的 以为这个是立即执行的 

// 通过暴漏出来的接口的竖向和方法进行访问喽

/*
    切记：
        * 私有的属性必须用var 声明
        * 共有的方法和属性是对象的字面量的形式
*/
