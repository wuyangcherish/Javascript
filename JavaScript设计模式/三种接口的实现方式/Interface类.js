// 这个是 JavaScript 模式的Interface类

//constructor

var Interface = function(name,method) {
    //参数不够的情况下
    if(arguments.length != 2) {
        throw new Error("参数至少需要两个")
    }
    
    //else
    this.name = name;  //按照例子所给的是 'DynamicMap'
    this.methods = [];  //['centerOnPoint', 'zoom', 'draw']
    
    //遍历整个接口
    for(var i=0,len = methods.length;i<len;i++){
        
        //如果接口名不是字符串
        if(typeof method[i] !== 'String') {
            throw new Error("Interface constructor expects method names to be "+ "passed in as a String.");
        }
        this.methods.push(methods[i]);
    }
}

//Static class method

Interface.ensureImplements = function(object) {
    
    //参数长度小于2 抛出异常
    if(arguments.length<2){
        throw new Error('Function Interface.ensurplements called with '+ arguments.length+"arguments, but expected at least 2.");
    }
    
    //正常往下执行
    //循环调用该函数的函数的参数  第一个不是接口 所以从1 开始循环
    
    //mapInstance    DynamicMap == arguments
    for(var i=1,len=arguments.length;i<len;i++){
        var interface = arguments[i];
        
        //如果interface 的 构造函数不是Interface 则抛出异常
        if(interface.constructor !== Interface){
            throw new Error("function Interface.ensureImplements expects arguments"+ "two and above to be instance of Interface");
        }
        
        //循环构造函数里面的methods的接口名
        for(var j=0,methodLen = interface.methods.length; j<methodLen;j++){
            var method = interface.methods[j];
            
            //如果发现该接口名不存在  里面或者 object[method] 不是一个函数 则抛出异常
            if(!object[method] || typeof object[method] !== 'function'){
                throw new Error("Function Interfce.ensureImplements: object "+ "does not implement the "+ interface.name + 'interface.Method '+ method+"was not found");
            }
        }
    }
    
}

// 使用的时候
 var DynamicMap = new Interface('DynamicMap',['centerOnPoint', 'zoom', 'draw']);

function displayRoute(mapInstance){
    Interface.ensureImplements(mapInstance,DynamicMap)
}


























