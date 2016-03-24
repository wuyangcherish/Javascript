/*
    单体模式之2
*/

var Corp = {};

Corp.Common = {
    //...
}

Corp.Error = {
    //...
}

//

var Singleton = {};

Singleton.Common = {
    username: "wuyang",
    getName: function(){
        return this.username;
    }
}

//调用
Singleton.Common.getName();  //wuyang

Singleton.Common.username;  //wuyang