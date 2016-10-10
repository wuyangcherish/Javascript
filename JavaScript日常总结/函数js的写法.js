1./*原理：
		返回元素e的纯文本
		s保存所有的子节点的文本；
		如果是文本的话则添加到s中；
		如果不是文本则递归调用textContent函数再查找他的子集；
		childNodes只包含一级子节点，不包含孙级以下节点。
		*/
	function textContent(e){
		var child,type,s='';	
		for(child=e.firstChild;child!=null;child=child.nextSibling){
			type=child.nodeType;	
			if(type===3||type==4){
				s+=child.nodeValue;
			}
			else{
				s+=textContent(child);
			}
		}
		return s;
	}
	2./*一个参数是返回元素的TextContent或innerText；
 		两个参数是用value的值设置元素的TextContent/innerText;*/
	 function textContent(element,value){
	  var content=element.textContent; //检测TextContent是否有定义
	  if(value==undefined){	//没传递值则返回当前文本‘
	   if(content!==undefined){
	    return content;
	   }
	   else{
	    return element.innerText;
	   }
	   else{
	    if(content!==undefined){	//传递了value值的话，设置文本。
	     element.textContent=value;
	    }
	    else{
	     element.innerText=value;
	    }
	   }
	  }
	 }
	 3./*递归的n的后代节点文本变成大写形式
	 	原理：先判断是不是text节点；是的话就转化为大写；
	 			如果不是的话则递归调用该函数遍历它的子节点的元素*/
	 function upcase(){
	 	if(n.nodeType==3||n.nodeType==4){
	 		n.data=n.data.toUpperCase();
	 	}
	 	else{
	 		for(var i=0;i<n.childNodes.length;i++){
	 			upcase(n.childNodes[i]);
	 		}
	 	}
	 }
	 4./*将元素插入到parent中，使其成为第n个子节点；
	 	原理：如果n超出parent的长度或者小于0则抛出错误；
	 			如果n刚好和parent的节点长度相等则插入到最后；
	 			其他的情况则插入到里面
	 	*/
	 	function insert(parent,child,n){
	 		if(n<0||n>parent.childNodes.length;){
	 			throw new Error("invalid index")
	 		}
	 		else if(n==parent.childNodes.length){
	 			parent.appendChild(child);
	 		}
	 		else{
	 			parent.insertBefore(child,parent.childNodes[n]);
	 		}
	 	}
	 5./*以一个对象x,y属性的的方式返回滚动条的偏移量。
	 		*/
	 	function getScrollOffset(w){
	 		//使用指定的窗口，如果不带参数则使用当前的窗口
	 		w=w ||window;
	 		//IE8一下不支持
	 		if(a.pageXOffset!=null){
	 			return {x:w.pageXOffset,y:w.pageYOffset};
	 		}
	 		//对于标准下的ie（或者任何浏览器）；
	 		var d=w.document;
	 		if(document.compatMode=='CSS1Compat'){
	 			return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};
	 		}
	 		//对于怪异模式的浏览器
	 		return{x:d.body.scrollLeft,y:d.body.scrollTop};
	 	}
	 5.//重力运动
	 var timer=null;
		function gravityMove(obj,iSpeedy){
		clearInterval(timer);
		timer=setInterval(function(){
			iSpeedy+=3;
			var t=obj.offsetTop+iSpeedy;
			if(t>=(document.documentElement.clientHeight-obj.offsetHeight)/2){
				t=(document.documentElement.clientHeight-obj.offsetHeight)/2;
				iSpeedy*=-0.75;
			}
			else if(t<=0){
				t=0;
				iSpeedy*=-1;
			}
			if(Math.abs(iSpeedy)<1){
				iSpeedy=0;
			}
			obj.style.top=t+'px';
		},30);		
	}
	6./*获取样式的函数--*/
		function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}
		/*三目：function getStyle(){
			obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
		}*/
			//调用的时候传进去被获取的元素及被获取的样式；
		/*
			获取id的函数：
			调用的时候直接写var XXX=$(id);

		*/
		var $=function (id){
   			 return document.getElementById(id);
		}
	7./*
		运动的代码
		参数是：要运动的物体，要改变的样式（width,height,top,left等），调用一次运动的距离（步长），目标位置，回调函数。
		调用时   例：Move(oDiv,'left',9,700,function(){....})
	*/
	function Move(obj,attr,other,iTarget,endFn){
		other=parseInt(getStyle(obj,attr))<iTarget?other:-other;	
		clearInterval(timer);
		timer=setInterval(function(){
			var speed=parseInt(getStyle(obj,attr))+other;
				if(speed>iTarget&&speed>0||speed<iTarget&&speed<0){
					speed=iTarget;
				}
				obj.style[attr]=speed+'px';  //如果给这个方向作为一参数传进来的话就可以随意改他运动的方向了；
				if(speed==iTarget){
					clearInterval(timer);//正好停到700；
					if(endFn){
						endFn();
					}
				}
		},30);
	}
	8./--
			---/*如果数字单位则补零；如果数字是双数，则直接返回；[用在时间的显示上面；]
			---第二个是封装好的显示时间的代码，里面用到第一个函数补零；*/
	--/
		function toDou(n){
			if(n<10){
				return '0'+n;
			}else{
				return n;
			}
		}
		function getTime(){
		var date=new Date();
		var Hours=date.getHours();
		var Minu=date.getMinutes();
		var seconds=date.getSeconds();
		var oH3=document.getElementsByTagName("h3")[0];
		var str=toDou(Hours)+toDou(Minu)+toDou(seconds);
		oH3.innerHTML=str;
		}
	9./--
		1.排序：sort();
		//从大到小：
			arr.sort(function(a,b){
				return b-a;
			});
		//从小到大：
			arr.sort(function(a,b){
				return a-b;
			});
		//随机排序：
			arr.sort(function(a,b){
				return Math.random()-0.5;
			});
		/*随机数字的返回：*/
			x~y之间：
			Math.round(Math.random()*(y-x)+x);
		/*字符串的颠倒reverse()函数：*/
			str='abcdefg';
			/*先分割成数组str.split("");-->['a','b',....];
			再用数组的方法颠倒：str.reverse();-->['g','f',....];
			然后把数组转化为字符串：str.join('');
			-->str.split("").reverse().join('');*/
		/*排序比较：适合于大多数排序比较，只要将参数传递给sort()即可。例:array.sort(compare);
			如果把return的-1和1调换了位置的话，则会从大到小排列
		*/

			function compare(value1,value2){
				if(value1<value2){
					return -1;
				}else if(value1>value2){
					return 1;
				}else{
					return 0;
				}
			}
	---/
	10.//Cookie：
		//设置cookie：
		function setCookie(key,value,t){
			var oDate=new Date();
			oDate.setDate(oDate.getDate()+t);
			document.cookie=key+'='+value+';expires='+oDate.toGMTString();
		}
		//读取cookie:
		function getCookie(key){
			var arr1=document.cookie.split('; ');
			//按照'; '给分割成数组【在cookie里面每一个cookie的保存格式就是这个】（分成了arr1[key=value,...]的形式）
			for(var i=0;i<arr1.length;i++){
				var arr2=arr1[i].split("=");//遍历数组arr里面的每一个后再把它用’=‘分割。就成了一个个的数组
				if(arr2[0]==key){
					return decodeURI(arr2[1]);//用key的值找到cookie的对应的那一个；
				}
			}
		}
		//清楚cookie:
		function removeCookie(key){
			setCookie(key, '', -1);
		}
		11./*Ajax:*/
		//method-请求方式，url-地址，data-数据，fnsucc-成功，fnfail-失败
		function  ajax(method,url,data,fnsucc,fnfail){
			//创建对象：
			if(window.XMLHttpRequest){
				var oAjax=new XMLHttpRequset();
			}else{
				var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
			}
			//获取请求：url?/t=new Date().getDate()
			if(method=='get'&&data){
				url+='?'+data;	//取消缓存问题post 没有缓存问题。
			}
			oAjax.open(method,url,true);
			//发送请求：
			if(method=='get'){
				oAjax.send();
			}else{
				//申明发送数据的数据类型。
				oAjax.setRequsetHeader('content-type','application/x-www-form-urlencoded');
				oAjax.send(data);
			}
			//读取ajax:
			oAjax.onreadystatechange=function(){
				if(oAjax.readyState==4){
					if(oAjax.status==200){
						fnsucc(oAjax.responseText);
					}else{
						if(fnfail){
							fnfail(oAjax.status);
						}
					}
				}
			}
		}
		12./*http的纯文本*/
		function postMessage(msg){
			 var request=new XMLHttpRequest();
			 request.open("POST","/log.php");	//用POST向服务器发送脚本
			 request.setRquestHeader("Content-Type","text/plain;charset=UTF-8");//请求主体将是纯文本。
			 request.send(msg);	//把msg作为请求主体发送。
			}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
13./*DOM 扩展*/
document.querySelector("要选择的元素");//id class 都可以
XXXX.querySelectorAll("一堆元素");//nodeList类型的节点列表
matchesSelector()://如果调用的额元素与该选择符匹配，返回true.不匹配返回false;由于兼容性所以要写个包装函数
14./*元素遍历*/
childElementCount://返回子元素（不包括文本节点和注释）的个数
firstElementChild://指向第一个元素。firstChild的元素版。
lastElementChild://指向最后一个元素lastChild的元素版
previousElementChild://指向前一个同辈元素，previousSibling的元素版
nextElementChild://指向下一个同辈元素，nextSibling的元素版	
children：//值包含元素中同样还是元素的节点
innerText://插入文本，有兼容性问题 FF下面是textContent;
	function getInnerText(element){
		return (typeof element.textContent=="string")? element.textContent :　element.innerText;
	}
	function setInnerText(element,text){
		if(typeof element.textContent=="string"){
			element.textContent=text;
		}else{
			element.innerText=text;
		}
	}
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
15./*DOM2  DOM3*/
--------------------------------------------------------------
  /**元素样式**/
cssText://通过它可以访问到style特性中的css代码（css必须是js编写的）
length://得到元素css属性的数量.
getPropertyCSSValue(propertyName)://返回给定属性值得cssValue值。
item(index)://返回给定字符串的值
removeProperty(propertyName)://从样式表中删除该属性
setProperty(propertyName,value,priority)://讲给定的属性设置为其他的值，病加上优权标志。（important or  " "）
getComputedStyle(obj,null)://获取元素计算后的样式。IE不支持该属性用的是CurrentStyle  [颜色值和border值不可以获取]
selectorText://返回 例：返回div .box 当前规则的选择符文本
/*获取css*/
function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}
var rule=sheet.cssRules ||  sheet.rules://获取css的规则列表
/*输出文档中的属性*/
var sheet=null;len=document.getStyleSheet.length;
for(var i=0;i<len;i++){
	sheet=document.styleSheet[i]
	return sheet;
}
rule.style.background // rule是规则列表中的东东，width/height/background等等
/*创建样式*/
	sheet.insertRule("body {background:#000;}",0)://DOM方法IE8以下不支持
	addRule("body {background:#000;}",0)//仅仅对IE有效 第二个参数0是显示的插入位置，可以忽略不写
	function insertRule(sheet,selectorText,cssText,position){
		if(sheet.insertRule){
			sheet.insertRule(selectorText+"{"+cssText+"}",position)
		}else if(sheet.addRule){
			sheet.addRule(selectorText,cssText,position)
		}
	}
	//sheet:link里面的样式表。selectorText:选择符文本，cssText:css语句，position:插入位置
/*删除样式*/
	sheet.deleteRule(0)://DOM方法
	sheet.removeRule(0)//仅仅对IE有效
	function deleteRule(sheet,index){
		if(sheet.deleteRule){
			sheet.deleteRule(index);
		}else if(sheet.removeRule){
			sheet.removeRule(index);
		}
	}
deleteRule(document.styleSheet[0],0)//调用的方法

/*获取<link>或<style>获取元素的的样式*/
function getStyleSheet(){
	return element.sheet || element.styleSheet
}
var link= document.getElementsByTagName("link")[0];
var sheet=getStyleSheet(link);
-------------------------------------------------------------------------------
/**元素大小**/
//偏移量---不包括margin
offsetHeight：//元素在垂直方向上的高度，包括内边距滚动条的高度边框的高度
offsetWidth://元素在水平方向上的宽度：元素宽度+padding+border+垂直滚动条的宽度
offsetLeft://元素左外边框到包含他的元素内边框的距离
offsetTop://元素上边框到包含元素上内边距的像素距离
//元素在页面上的偏移量  //获取offsetTop的方法同上
function getElementLeft(element){
	var actualLeft=element.offsetLeft;
	var current =element.offsetParent;
	while(current!==null){
		actualLeft+=current.offsetLeft;
		current=current.offsetParent;
	}
	return actualLeft;
}

//客户区大小client--client：是指元素内容（宽高）和内边距所占据空间的大小不包括border+margin；滚动条不算
clientWidth:width+padding[left/right]
clientHeight:height+padding[top/bottom]
document.documentElement||document.body//兼容情况
document.compatMode属性://检查浏览器是否处于混杂模式
function getViewport(){
	if(document.compatMode=="BackCompat"){
		return {
			width:document.body.clientWidth;
			height:document.body.clientHeight;
		}
	}else{
		return {
			width:document,documentElement.clientWidth;
			height:document,documentElement.clientHeight;
		}
	}
}
//滚动大小
scrollWidth://在没有滚动条的情况下元素的宽度【元素实际的宽度，包括隐藏的】
scrollHeight://没滚动条的情况下元素的高度【元素实际的高度，包括隐藏的】
scrollTop://被隐藏在内容区域上方的像素，通过改变这个可以改变元素的滚动位置
scrollLeft://被隐藏在内容区域左侧的像素，通过改变这个可以改变元素的滚动位置
//在确定文档的高度的时候必须取得scrollHeight/scrollTop中的最大值即：Math.max(../..)
-----------------------------------------------------------------------------------------------------------------------/*事件*/---------------------------------------------------------------------------------------
//事件流
addEventListener()://接收三个参数,要处理的事件名，事件处理程序的函数，布尔值(true:捕获阶段调用事件处理函数;false:事件冒泡阶段处理函数)参数1例：点击事件："click"
removeEventListener()://同上addEventListener;
//使用DOM2级方法添加事件处理程序的好处是可以添加多个事件处理程序通过addEventListener添加的事件必须用removeEventListener来移除。
attachEvent()://在IE下面面不支持addEventListener()方法所以用这个IE8以下只支持事件冒泡，所以没有第三个参数，前两个参数同上，不过第一个参数例：点击必须是"onclick"
detachEvent()://用法同attachEvent();
//跨浏览器事件处理程序
var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	} 
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(element,type,handler);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler)
		}else{
			element["on"+type]=null;
		}
	}
}
EventUtil.addHandler(btn,"click",handler);
EventUtil.removeHandler(btn,"click",handler)
//在事件处理的内部，对象this始终等于currenTarget的值，而target则只包含事件的实际目标如果直接把事件处理程序给了指定目标，则this和currentTarget，target都是相同的值。
event.type：//事件的动作"click","mouseover"等等用它来判断执行的动作
preventDefault()://阻止默认事件,只要cancelable属性为true的时候擦可以使用；例如：超链接是单击实现的要取消的话,
	link.onclick=function(event){
		event.preventDefault();
	}
stopPropagation()://立即停止事件在DOM层次中的传播，即进一步取消时间的捕获或冒泡，例如：添加到按钮上面的事件可 以调用它防止出发注册在document.body上面的处理事件。例：
btn.onclick=function(event){
	alert("click");
	event.stopPropagation();
}
eventPhase://确定事件处于哪个阶段:1：捕获阶段的事件处理程序 2：事件在处理程序的目标上，3：处于事件冒泡阶段调用的
window.event：//ie上面的event是在window对象上面的
window.event.returnValue=false;//在ie下面==preventDefault()
window.event.cancelBubble=true;//在ie下面==sstopPropagation()
////所以要做兼容性处理
var EventUtil={
	addhandler:function(element,type,handler){
		/*..代码.添加事件*/
	},
	getEvent:function(event){
		return event? event:window.event;
	},
	getTarget:function(event){
		return event.target || event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventdefault();
		}else{
			event.returnValue=true;
		}
	},
	removeHandler:function(event){
		/*..代码.移除事件*/
	}
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
}
btn.onclick=function(event){
	event=EventUtil.getEvent(event);
}//调用方法
----------------------------------------------------------------------------
/*UI事件*/
load：//页面完全加载完成(包括图像，css文件 js文件等)就会触发该事件
EventUtil.addhandler(window,"load", function(event){
	//...load代码
});//还有一种是直接加在body上面的
<img src="../" onload="alert(img load)">//这个是图片上面的加载完成，也可以用js写
unload://页面的对应文档呗完全卸载后触发,用法同上load
resize://当浏览器的窗口贝调整到一个新的高度的时候就会触发该事件
EventUtil.addHandler(window,"resize",function(){
	//...resize代码窗口的最小化和最大化也会触发
})
scroll：//事件是window上面的，但是实际表示是页面中相应元素的变化。
EventUtil.addHandler(window,"scroll",function(){
	if(document.compatMode=="CSS1Compat"){
		console.log(document.documentElement.scrollTop)
	}else{
		console.log(document.body.scrollTop)
	}
})
-----------------------------------------------------------------------------
/*焦点事件*/
blur://元素失去焦点的时候触发，不冒泡
focus://元素获得焦点时触发，不冒泡
focusin://元素获得焦点的时候触发，支持冒泡
focusout://元素时区焦点的时候触发，支持冒泡
var isSupported=document.implementation.hasFeature("FocusEvent","3.0")//检查是否支持
-----------------------------------------------------------------------------
/*鼠标和滚轮事件*/
click://可以通过鼠标单击和回车键触发
dblclick://鼠标双击触发
mousedown://鼠标按下触发
mouseenter://鼠标从元素的外部首次移动到元素的内部触发，不支持冒泡
mouseleave://鼠标移出触发
mousemove://鼠标在元素内部移动触发的事件
mouseout://鼠标移出时触发
mouseover://鼠标指针位于元素的内部，首次移入另一个元素边界之内触发，不支持冒泡
mouseup://用户释放鼠标按钮触发
var isSupported=document.implementation.hasFeature("MouseEvent","3.0")//检查是否支持
//客户区的大小
clientX || clientY://用来获取鼠标在可视区的位置(不包括滚动页面的距离)
EventUtil.addhandler(window,"click" function(event){
	event=EventUtil.getEvent(event);
	console.log("Client coordinates:"+event.clientX+","+event.clientY);
})
//页面坐标
pageX || pageY ://鼠标在页面上的坐标，包括滚动区域用法代码同上；在页面没有滚动的情况下值==clientX clientY
var div=document.getElementById("div");
EventUtil.addHandler(div,"click",function(event){
	event=EventUtil.getEvent(event);
	var pageX=event.pageX,pageY=event.pageY;
	if(pageX===undefined){
		pageX=event.clientX+(document.documentElement.scrollLeft || document.body.scrollLeft);
	}//IE8 一下没有page属性所以必须用鼠标在客户区的位置加上滚动页面的高度
	if(pageY===undefined){
		pageY=event.clientY+(document.documentElement.scrollTop || document.body.scrollTop);
	}
	console.log("Page coordinates:"+pageX+','+pageY);
})
//屏幕的位置
screenX || screenY://这个可以确定鼠标相对于这台电脑屏幕的位置，而不在乎浏览器的窗口的大小用法同上免得函数调用
//鼠标按钮：0：没有按下 1：左键 2：右键 3：同时按下左右两个键 4：按下了中间鼠标键在eventUtil里面再绑定一个方法：
var EventUtil={
	getButton:function(event){
		if(document.implementation.hasFeature("MouseEvents","2.0")){//这个检测button属性是否包含正确的值
			return event.button;
		}else{
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:return 0;
				case 2: case 6:return 2;
				case 4:return 1;
			}
		}
	},//....省略其他代码(前面写过了)
}//用法和上面调用eventUtil的方法一样
//鼠标滚轮事件
var EventUtil={
	getWheelDelta:function(event){
		if(event.wheelDelta){
			return( client.engine.opera && client.engine.opera <9.5 ? -event.wheelDelta :event.wheelDelta)
		}else{
			return -event.detail*40
		}
	}
}
(function(){
	function handleMouseWheel(event){
		event=EventUtil.getEvent(event);
		var delta=EventUtil.getWheelDelta(event);
		console.log(delta);
	}
	EventUtil.addHandler(document,"mousewheel",handleMouseWheel);
	EventUtil.addhandler(document,"DOMMouseScroll",handleMouseWheel)
})();//执行滚轮事件
//键盘与文本事件
var textBox=document.getElementById("myText");
EventUtil.addHandler(textBox,'keyup',function(event){
	event=EventUtil.getEvent(event);
	console.log(event.keyCode);
})	//该例子是每次在文本框中按键触发keyup事件就会显示他的键码
//经过更改的键盘显示键码----在取得编码之后，可以用String.fromCharCode()将其转化为实际的字符
EventUtil={
	getCharCode:function(event){
		if(typeof event.charCode=="number"){
			return event.charCode;
		}else{
			return event.keyCode;
		}
	}
}
textInput://DOM3的新事件，当用户在可编辑区输入字符的话就会触发该事件只有用户按下能够输入实际字符的键 才会触发IE9还支持一个inputMethod属性，这个属性用来判断输入的文本是通过什么方式输入的(语音输入，粘贴输入等)
 --------------------------------------------------------------------------------------------------------------------/*表单脚本*/----------------------------------------------------------------------------------------
/*过滤输入*/
//屏蔽字符--如果输入中不能包含一些字符，如电话号码只能是数字
EventUtil.addhandler(textbox,"keypress",function(event){
	event=EventUtil.getEvent(event);
	var target=event.getTarget(event);
	var charCode=event.getCharCode(event);
	if(!/\d/.test(String.fromCharCode(charCode)) && charCode>9 && !event.ctrlkey){
		EventUtil.preventdefault(event);
		//可以屏蔽非数字键，但是特殊键可以使用--/\d/：所有的数字
	}
})

-------------------------------------------------------------------------------------------------------------------------/*离线应用与客户端存储*/-------------------------------------------------------------------------
//应用缓存
navigator.onLine://检测用户是否连接网络，，更好的确定网络是否可用HTML5定义了online和offline事件当网络 从在线转为离线或者离线转为在线的时候触发这两个事件【一般都是先用这个获取到出事网络连接的状态，然后再用这两个属性坚挺网络的链接变化状态】
EventUtil.addHandler(window,'online',function(event){
	//...在线要执行的动作
})
EventUtil.addHandler(window,'offline',function(event){
	//...离线要执行的动作
})
/*manifest文件：该文件记录着那些资源需要离线应用缓存，那些资源需要通过联网获取等信息，应用时只需要在页面html标签中增加manifest属性，并指定manifest文件：<html manifest="该文件的地址">；
在web.xml中，mime-mapping类型处增加如下代码即可：*/
<mime-mapping> 
<extension>manifest</extension> 
<mime-type>text/cache-manifest</mime-type> 
</mime-mapping>
//manifest的文件中书写方式如下：
CACHE MANIFEST //联网下需要缓存的文件
index.html
text.js
NETWORK//需要联网才显示的文件
images
FALLBACK //前半部分无法获取的时候请求转到后半部分的文件。
offline.html
index.html
//【manifest文件是简单地文本文件，他告知浏览器要缓存的内容，扩展名建议”. appcache“】.
applicationCache.update()://已经调用就会检测应用缓存是否更新
-----------------------------------------
//Cookie代码：
var CookieUtil={
	get:function(name){
		var cookieName=encodeURIComponent(name)+"=",
			cookieStart=document.cookie.indexOf(cookieName),
			cookieValue=null;
		if(cookieStart>-1){//找到了cookieName
			var cookieEnd=document.cookie.indexOf(";",cookieStart);
			if(cookieStart==-1){
				cookieEnd=document.cookie.length;
			}
			cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
		}
		return cookieValue;
	},
	set:function(name,value,expires,path,domain,secure){
		var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
		if(expires instanceof Date){
			cookieText+="; expires="+expires.toGMTString();
		}
		if(path){
			cookieText+="; path="+path;
		}
		if(domain){
			cookieText+="; domain"+domain;
		}
		if(secure){
			cookieText+="; secure"+secure;
		}
		document.cookie=cookieText;
	},
	unset:function(name,path,domain,secure){
		this.set(name,'',new Date(0),path,domain,secure);
	}
}
CookieUtil.set("name","nicols");//设置cookie
CookieUtil.get("name");//读取cookie
CookieUtil.unset("name");//删除cookie
---------------------------------------------------------
sessionStorage://对象存储特特定于某个会话的数据，也就是该数据只保持到浏览器关闭，可以跨页面刷新而存在：
sessionStorage.setItem("name","Niclos");//使用方法存储数据；
sessionStorage.book="Professional Javascript";//使用属性存储数据
//在Ie8中可以强制把数据写入磁盘，只是用于ie8----[仅仅对于大数据]
sessionStorage.begin();
sessionStorage.name="Niclos";
sessionStorage.booke="Professional Javascript";
sessionStorage.commit();

sessionStorage.getItem("name")://使用方法读取数据
var book=sessionStorage.book;//使用属性读取数据
for(var i=0;i<sessionStorage.length;i++){
	var key=sessionStorage.key(i);
	var value=sessionStorage.getItem(key);
	console.log(key+'='+value);
}//循环读取所有的数据
for(var key in sessionStorage){
	var value=sessionStorage.getItem(key);
	console.log(key+'='+value);
}

delete sessionStorage.name;//删除一个值---在WebKit下面无效
sessionStorage.removeItem("book");//使用方法删除一个值；兼容所有浏览器
------------------------------------------------------------
globalStorage://对象，跨域会话存储数据，但是有特定的访问限制首先要指定哪些域可以访问到该数据用[]来实现
globalStorage["wrox.com"].name="Niclos";//保存数据
var name=globalStorage["wrox.com"].name;//获取数据
//这样的定义是在wrox.com及其所有的子域面都是可以访问到的
globalStorage["www.wrox.com"].name="Niclos";//像这样的话就只能是这个网页可以访问，其他的子域不可以
globalStorage[" "].name="nicols";//任何人都可以访问到，不可以这么做[".net"]也不可以
//如果不是新制定域名的话就
globalStorage[location.host].name="Niclos";
//如果不适用removeItem()或者是delete的话，用户如果没有清除缓存， 存储在globalStorage属性中的数据就会一直保留在磁盘上，这让globalStorage非常适合在客户端存储文档或者长期的保存用户爱好设置
localStorage://它不能指定任何的访问规则，规则事先就定好了，要访问同一个localStorage对象，页面必须来自同一个域名  (子域名无效)，在同一个端口上，用同一种协议，相当于["location.host"].
localStorage.setItem("name","Niclos");//方法存储
localStorage.book="Professional Javascript";//属性存储
var name=localStorage.getItem("name");
var book=localStorage.book;
//兼容性处理--兼容一些只支持globalStorage的浏览器
function getLocalStorage(){
	if(typeof localStorage=="object"){
		return localStorage;
	}else if(typeof globalStorage=="object"){
		return globalStorage;
	}else{
		throw new Error("Local storage is not available");
	}
}
var storage=getLocalStorage();//调用
storage事件：//对storage进行修改都会在文档上面触发storage事件。getItem。setItem 等等都会触发这个事件
EventUtil.addhandler(document,"storage",function(event){
	console.log("storage changed for "+event.domain);
}
------------------------------------------------------
/*数据库*/
IndexedDB://使用对象保存数据，一个IndexedDB数据库，就是一组相同命名空间下的对象的集合
var request,database;
request=indexedDB.open("admin");//数据库存在直接调用，不存在创建再调用
if(database.version != "1.0"){
	request=database.setVersion("1.0");//设置数据库的版本号
	request.onerror=function(event){
	alert("Something bad happend while trying to open "+event.target.errorCode);
	}
	request.onsuccess=function(event){
		database=event.target.result;
	}
}
-----------------------------------------------------------------------------------------------------------------------------/*Ajax*/------------------------------------------------------------------------------
function createXHR(){
	if( typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != "undefined"){
		if(typeof arguments.callee.activeXString !="undefined"){
			var versions=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"], i, len;
			for(i=0; len=versions.length ;i<len; i++){
				try{
					new ActiveXObject(versions[i]); //从最高的版本开始创建，
					arguments.callee.activeXString==versions[i];
					break;
				}catch(ex){
					//跳过
				}
			}
		}
		return new ActiveXObject(arguments.calle].activeXString);
	}else{
		throw new Error("NO XHR object available");
	}	
}
//用法：
 var xhr=createXHR();   //创建对象：
 xhr.open("get","要传输的文件名",false);//发送请求
 xhr.send(null);
 //完整
 var xhr=createXHR();
 xhr.onreadystatechange=function(){
 	if(xhr.readyState==4){
 		if(xhr.status>=200 && xhr.status <300 || xhr.status==304){
 			console.log(xhr.responseText);
 		}else{
 			console.log("request was unsuccessful :"+xhr.status);
 		}
 	}
 };
 xhr.open("get","examle.txt",false);
 xhr.send(null);
 //GET请求 ,一般就是"example.php?name1=value1&name2=value2"   下面的函数就是根据这个发送请求
 function addURLParam(url,name,value){
 	url+=(url.indexOf("?")==-1 ? "?" :"&");//有参数的话则加上&没得话就加上?
 	url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
 	return url;
 }
//调用
var url="example.php";
//添加参数
url=addURLParam(url,"name","Niclos");
url=addURLParam(url,"book","Professional Javascript");
//初始化请求
xhr.open("get".url,false);
//POST请求，把数据作为主体请求
xhr.setRequsetHeader("Content-Type","application/x-www-form-urlencoded");
var form=document.getElementById('form');
xhr.send(form);//如果要序列化的话则：send(serialize(form));

Formdata()://表单数据的列表化，用Ajax传输的话可以省去头部
var form=document.getElementById("user_info");
xhr.send(Formdata(form));//XHR对象可以自动识别并设置头部

timeout://超时设定
xhr.timeout(1000);//仅仅适用于IE8+
xhr.ontimeout=function(){
	alert("超时")
}
//重写Mime类型.默认是"text/plain",必须在send()之前调用
xhr.overrideMimeType("text/xml");

//load事件------------------------------------------------------------
var xhr=createXHR();
xhr.onload=function(){
	if(xhr.status>=200 && xhr.status <300 || xhr.status==304){
		console.log(xhr.responseText);
	}else{
		console.log("request was unsuccessful :"+xhr.status);
	}
};//优点：可以不用检测xhr.readyState的状态
//progress事件,会在浏览器接受数据期间周期性的触发，有三个参数---可以创建出进度指示器
lengthComputable://表示进度是否可用的布尔值
position://表示已经接收的数据
totalSize://根据Content-Length响应头部确定预期字节数
var xhr=createXHR();
xhr.onload=function(){
	if(xhr.status>=200 && xhr.status <300 || xhr.status==304){
		console.log(xhr.responseText);
	}else{
		console.log("request was unsuccessful :"+xhr.status);
	}
	xhr.onprogress=function(event){
		var divStatus=document.getElementById("status");
		if(event.lengthComputable){
			divStatus.innerHTML="received"+event.position+"of"+event.totalSize+"bytes";
		}
	}//显示进度 send之前调用
};

//跨域请求
//IE对cors的实现 XDR对象时创建一个XDomainRequest()的实例，调用open(),send();XDR 都是异步的
var xdr=new XDomainRequest();
xdr.onload=function(){
	console.log(xdr.responseText);
}
xdr.onerror=function(){
	console.log("An Error");
}
xdr.open("get","http://www.baidu.com/page/");
xdr.contentType="application/x-www-form-urlencoded";
//这个属性是通过XDR对象影响头部信息的唯一方式。
xdr.send(null);//XDR也支持timeout属性及ontimtout处理程序
//其他浏览器对CORS的实现，无需编写额外的代码就可以触发这个行为要请求另一个域的资源， 使用XHR对象并在open里面传入绝对URL即可。
xhr.open("get","http://www.baidu.com/page/",true);
xhr.send(null);
//还有自定义请求【P585】
//带凭据的请求
Access-Control-Allow-Credentials:true;//iE10-以下都不支持
//兼容性处理
function createCORSRequest(method,url){
	var xhr=new XMLHttpRequest();
	if("withCredentials" in xhr){
		xhr.open(method,url,false);
	}else if(typeof XDomainRequest !="undefined"){
		var xhr=new XDomainRequest();
		xhr.open(method,url);
	}else{
		xhr=null;
	}
	return xhr;
}
var request=createCORSRequest("get","http://www.baudu.com/page/");
if(request){
	request.onload=function(){
		//对request 文本responseText进行处理
	};
	request.send();
}
xhr.abort()//终止正在进行的请求响应