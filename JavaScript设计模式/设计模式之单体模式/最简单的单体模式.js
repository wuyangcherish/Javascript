/*
    其实就是一个对象喽
*/

var Singleton = {
    attribute1: true,
    attribute2: 100,
    
    method1: function(){
        //...
    },
    method2: function(){
        //...
    }
}

//访问的时候用

var s1 = Singleton.attribute1;
var s2 = Singleton.attribute2;

//改写的时候：

Singleton.attribute1 = false;