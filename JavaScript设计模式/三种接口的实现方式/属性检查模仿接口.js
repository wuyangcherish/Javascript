/*

    Interface Compsite() {
        function add(child);
        function remove(child);
        function get(child);
    }

    Interface FormItem{
        function save();
    }
    
*/

var CompositeForm = function(id, method, action){
    this.implementsInterfaces = ['Composite', 'FormItem'];
    //...
}

function addItem(formInstance){
    if(!implements(formInstance,'Composite','FormItem')) {
        throw new Error("Object does not implement a require interface");
    }
    //... 接口都实现了
}


//检测接口是否存在  每个接口都存在才返回true;
function implements(object) {  //object = formInstance  
    
    // arguments = formInstance Composite FormItem ...
    
    // 从第二个开始循环  因为第一个不是接口名称
    for(var i=1; i<arguments.length;i++) {
        
        //每次传给interfaceName 一个argument 的值 然后跟在接口名字中找一下
        var interfaceName = arguments[i];  
        var interfaceFound = false;
        
        //在接口中查找有没有这个接口名
        for(var j=0; j<object.implementsInterfaces.length;j++){
            
            //
            if(object.implementsInterfaces[j] == interfaceName){
                interfaceFound = true;
                break;
            }
        }
        if(!interfaceFound) {
            return false;
        }
    }
    return true;
}