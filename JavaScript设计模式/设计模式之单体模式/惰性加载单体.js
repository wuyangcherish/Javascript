/*
    单体模式之 惰性模式
*/

var Corp = {};

//立即执行函数
Corp.Singleton = (function(){
    
    // 定义一个变量用于检测是否已经被被实例化
    var  uniqueInstance
    
    //创建一个函数 里面都是私有的属性和方法
    function constructor(){
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
    
    }
    
    return {
        //一个实例化的函数
        getInstance: function(){
            //如果不存在实例化一次
            if(!uniqueInstance) {
                uniqueInstance = constructor();
            }
            
            return uniqueInstance;
        }
    }
})();  

//调用的时候跟模块模式的不同

Corp.Singleton.getInstance().publicMethod();
Corp.Singleton.getInstance().publicAttr1;


// 私有的属性是没办法访问到的 以为这个是立即执行的 

// 通过暴漏出来的接口的竖向和方法进行访问喽

/*
    切记：
        * 私有的属性必须用var 声明
        * 共有的方法和属性是对象的字面量的形式
*/


