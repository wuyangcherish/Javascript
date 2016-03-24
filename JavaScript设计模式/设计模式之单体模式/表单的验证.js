/*
    通过单体的模式进行的表单输入验证
*/

Corp.regPage = {
    //常量 constant
    FORM_ID: "reg-form",
    OUTPUT_ID: "reg-result",
    
    //初始化
    init: function(){
        
        Corp.regPage.formEle = $(Corp.regPage.FORM_ID);
        Corp.regPage.outputEle = $(Corp.regPage.OUTPUT_ID);
        
        addEvent(Corp.regPage.formEle,'submit', Corp.regPage.handleSubmit)
    },
    
    handleSubmit: function(e){
        
        //阻止表单的提交
        e.preventDefault();
        
        var data = {};
        //所有的输入
        var inputs = Corp.regPage.formEle.getElementsByTagName("input");
        
        //遍历 inputs 里的键值对然后放到data 里面
        for(var i=0,len=inputs.length;i<len;i++){
            data[inputs[i].name] = inputs[i].value; 
        }
        
        //发送到服务器端
        sendRegistration: function(data){
            // XMLHttpRequest  并且滴啊用displayResult
        }，
        
        displayResult: function(respnse){
            //Output the response  directly into the output element.
            //服务端将返回一个html
            Corp.regPage.outputEle.innerHTML = respnse;
        }
    }
    
}

function addEvent(elem, type, handle){
    if(window.addEventListenere) {
        elem.addEventListener(type,handle,false);
    }else if(window.attachEvent){
        elem.attachEvent("on"+type,handle)
    }else{
        elem["on"+type] = handle;
    }
}

//调用 addLoadEvent(Corp.regPage.init)

//PS: Corp.regPage  === this;

