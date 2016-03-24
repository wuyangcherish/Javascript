/*

    interface People() {
        function addPerson(child);
        function removePerson(child);
        function getPerson(child);
    }

    Interface FormItem{
        function save();
    }
*/

//定义接口类
var PeopleForm = function(id, method, action){
    //implements Composite, FormItem 
    
}

PeopleForm.prototype.addPerson = function(child){
    //push进一个存储的地方
}
PeopleForm.prototype.removePerson = function(child){
    //find 这个人然后再删掉它
}
PeopleForm.prototype.getPerson = function(child){
    //find 这个person 然后返回这个person
}
PeopleForm.prototype.save = function(){
    // save 函数
}
