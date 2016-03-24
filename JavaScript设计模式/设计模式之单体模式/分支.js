/*
    单体：
*/

var Corp = {};

Corp.Singleton= (function(){
    var objA = {
        m1: function(){
            //...
        },
        m2: function(){
            //...
        }
    };
    var objB = {
        m1: function(){
            //...
        },
        m2: function(){
            //...
        }
    };
    
    return (someCondition) ? objA : objB;
})