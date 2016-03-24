/*
    鸭式辩型
*/

// Interfaces

var Composite = new Interface('Composite',['add','remove','getChild']);
var FormItem = new Interface('FormItem',['save']);

// CompositeForm Class

var CompositeForm = function(id, method, action){
    //...
}

function addForm(formInstance){
    ensureImplements(formInstance, Composite, FormItem);
    //如果接口有的没有实现的话就会报错
}




