var obj=document.getElementById("mian");
obj.style.border="1px solid #000";
setTimeout(function(){
	obj.style.display="none";
},1000);
function delayMes(msg,time){
	setTimeout(function(){
		console.log(msg)
	},time);
}
delayMes("the div is none;",1000);



var s="tence is sb";
s=s.split(" ");
for(var i=0,len=s.length;i<len;i++){
	(function(){
		s[i]+=i+1;
		return s[i];
	})(i);
	
};
var num=100000000000023434900000000000;
num=num.toString();
function  num(num){
	var time=0;
	for(var i=0,len=num.length;i<len;i++){
		if(num.charAt(i)=="2"){
			time++;
		}else{
			continue;
		}
	}
}

//阻止事件冒泡

function stopBubble(e){
	if(e && e.stopPropagation){
		e.stopPropagation();
	}else{
		window.event.cancelBubble=true;
	}
}

//阻止默认事件
function stopDefault(e){
	if(e && e.preventDefault){
		e.preventDefault();
	}else{
		window.event.returnValue=false;
	}
	return false;
}


function createPerson(name,age,job){
	var o=new Person();
	o.name=name;
	return o;
}

function Person(name,age,job){
	this.name=name;
}
function Person(){};
Person.prototype.name=name;
Person.prototype.sayname=function(){alert(this.name;)}

//isprototypeof可以确定person1的原型是不是Perosn  
Person.prototype.isPrototypeOf(Person);

Person.prototype={
	name:"helo";
	sayName:function(){alert(this.name);
	//他的缺点是重写了默认的prototype。所以他的constrctor不会指向person了解决的方法就是：
	constructor:Person;//把它设置回来
	}
}



var application=function(){
	var compoents=new Array();
	compoents.push(new BaseCompoents());
	//公共方法;
	return{
		getComponentCount:function(){
			return compoents.length;
		}
		register:function(compoents){
			if (typeof compoents=="object") {
				compoents.push(compoents);
			};
		}
	}
}


function compare(a,b){
	if(a>b){
		return 1;
	}else if(a<b){
		return -1;
	}else{
		return 0;
	}
}
//函数可以作为参数传进去；
function callSomeFunction(somfunction,somearg){
	return somfunction(somearg);
}
function add(num){
	return num+10;
}
var add=callSomeFunction(add,20); //add=30;

function createComparisonFunction(propertyName){
	return function(obj1,obj2){
		var v1=obj1[propertyName];
		var v2=obj2[propertyName];
		if(v1>v2){
			return 1;
		}else if(v1<v2){
			return -1;
		}else{
			return 0;
		}
	}
}
var date=[{name:"world"},{name:"hang"}];
data.sort(createComparisonFunction("name"));

function sum(a,b){
	return a+b;
}
function callSum1(num1,num2){
	return sum.apply(this,arguments);
}
callSum1(1,2,3);

function determineOrder(value){
	var result=str.localeCompare(value);
	if(result<0){
		return "value 应排在 str 之后";
	}else if (result>0) {
		return "value 应该在 str 之前";
	};else{
		return "一样";
	}
}


//跨域请求
1.window.name;
2.document.domain //(适用于有着相同父域耳朵子域之间的交互)方法： 在不同的子域页面上都写着
		document.domain="example.com";
3.CORS(跨域资源共享);
		XMLHttpRequest 和XDomainRequest(ie下)来实现的；
		//不同：
			--XMLHttpRequest 可以访问到state 和 readyState 的状态，而XDomainRequest不能
			--XMLHttpRequest 可以实现同步跨域
			--xml                                                                                                                 
		//原理是：通过设置http请求头来实现跨域
		//服务器对cors的支持是：Access-Control-Allow-Origin来实现的。
		withCredientials：设置为：true  可以指定某个请求可以发送凭据
		function createCORSRequest(method,url){
			var xhr=new XMLHttpRequest();
			if("withCredientials"){
				xhr.open(method,url,true);//异步
			}else if(typeof XDomainRequest !=="undefiend"){
				vxhr=new XDomainRequest();
				xhr.open(method,url);
			}else{
				xhr=null;
			}
			return xhr;
		}
		var request=createCORSRequest("get","http://www.example.com/page/");
		if (request) {
			request.onload=function(){
				//对responesText进行解析
			}
			request.send();
		};

		//XDomainRequest:
			var xdr=new XDomainRequest();
			xdr.onload=function(){
				alert(xdr.responseText); //responseText是php里面的echo值；
			}
			xdr.onerror=function(){
				alert("An error occured");
			}
			xdr.abort();//xdr的终止请求。
			xdr.timeout=1000;
			xdr.ontimtout=function(){
				alert("Time out");
			}
			xdr.open("get",url);
			xdr.send(null);

//使用闭包查看元素的索引
var ul =document.getElementById("ul");
var aLi=ul.getElementsByTagName("li");
for(var i=0,len=aLi.length;i<len;i++){
	(function (num){
		aLi[num].onclick=function(){
			alert(num);
		}
	})(i)
}
//改善ie6的内存泄漏的问题
function close(){
	var div=document.getElementById("div");
	var test=div.innerHTML;
	div.onclick=function(){
		alert(test);
	}
	div=null; //保证了内存不被泄露
}


//深度克隆
function clone(obj){
	var buf;
	if (obj instanceof Array) {
		buf=[];
		for(var i=0,len=obj.length;i<len;i++){
			buf[i]=clone(obj[i]);
			return buf;
		}
	}else if(obj instanceof object){
		buf={};
		for(var k in obj){
			buf[k]=clone(obj[k]);
			return buf;
		}
	}else{
		return obj;
	}
}


//数组去重的方法；
1.
Array.prototype.unique1=function(){
	var arr=[];
	for(var i=0,len=this.length;i<len;i++){
		if(arr.indexOf(this[i])==-1){
			arr.push(this[i]);
		}
	return arr;
	}
}
2.
Array.prototype.unique2=function(){
	var a={}; r=[];
	for(var i=0;i<this.length;i++){
		if(!a[this[i]]){
			n[this]=true;
			r.push(this[i]);
		}
	return r;
	}
}
3.
Array.prototype.unique3=function(){
	var n=[this[0]];//第一个数先放进去
	for(var i=0;i<this.length;i++){
		if(n.indexOf(this[i])==i){
			n.push(this[i]);
		}
	}
	return n;
}

//兼容性的代码
function addEvent(element,type,fn){
	if(element.addEventListener){
		element.addEventListener(type,fn,true);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,fn);
		fn.call(element);
	}else{
		element['on'+type]=fn;
	}
}
function stopPropagation=function(event){
	if(event.stopPropagation){
		return event.stopPropagation();
	}else{
		window.event.cancelBubble=true;
	}
}
function preventDefalut(event){
	if (event.preventDefalut) {
		return event.preventDefalut(); 
	}else{
		window.event.returnValue=false;
	}
}

var ev=e||window.event;

function gettarget(event){
	if(event.target){
		return event.target;
	}else{
		return window.event.srcElment;
	}
}
function getClient(ev){
	if(ev.innerWidth !==""ubdefined){
		return {
			width：ev.innerWidth,
			height:ev.innerHeight
		}
	}else{
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clienHeight
		}
	}
} 
//获取滚动条位置
function getPOS(ev){
	return {
		top:document.documentElement.srcollTop || document.body.srcollTop,
		left:document.documentElement.srcollLeft || document.body.srcollLeft
	}
}

function Person(name,age){
	this.name=name;
	this.age=age;
	this.sayname=function(){
		console.log(this.name);
	}
}
Person.prototype.getage=function(){
	return this.age;
}
var o=new Object();
Person.call(o,"wuyang",23)
o.getage();

var arr=["one","two","three","four"];
function str(obj){
	var str="";
	for(var i=0;i<obj.length;i++){
		str+=obj[i];
	}
	return str;
}
str(arr);

//算法
//栈：是一个先入后出的算法--- 可以用pop(移除数组中最后一个元素)和push(在数组的最后添加一个新的元素)来模仿先入后出的的栈操作
function Stack(){
	this.dataStore=[];
	this.top=0;
	this.push=push;
	this.pop=pop;
	this.peek=peek;
	this.length=length;
}
function push(element){
	this.dataStore[this.top++]=element;
}
function pop(element){
	this.dataStore[--this.top];
}
function peek(element){
	return this.dataStore[this.top-1]; //返回低top-1个元素
}
function length(){
	return this.top;
}
//判断是否是回文数：
//原理：显示在这个函数里创建一个栈来存储传进来的word文本，在把栈里面的字符pop出来传给一个字符串。再比较他们两个相不相同，如果相同的话就是回文数
function isPalindome(word){
	var s= new Stack();
	for(var i=0;i<word.length;i++){
		s.push(word[i]);
	}
	var rword="";
	while(s.length>0){
		rword+=s.pop();
	}
	if(rword==s){
		console.log("是回文数");
	}
}
//栈实现的递归：
	//原理：先把数字存入到栈中。然后再用1和每一个push出来的数字相乘
	function fact(num){
		var s= new Stack();
		while(num>1){
			s.push(num--);//==s.push(num);num--;
		}
		var product=1;
		while(s.length()>0){
			product*=s.pop(); //每一项都相乘了；
		}
	}


//队列
	//队列是一个先入先出，后入后出的 用push()和shift()实现，从后面添加元素从队列的头部删除元素
function Queue(){
	this.dataStore=[];
	this.length=length;
	this.top=0;
	this.push=push;
	this.shift=shift;
	this.toString=toString;
	this.front=front;
}
function push(element){
	this.dataStore.push(element);
}
function shift(){
	this.dataStore.shift();
}
function front(){
	return this.dataStore[0];
}
function back(){
	return this.dataStore[this.dataStore.length-1];
}
function toString(){
	var reStr="";
	for(var i=0;i<dataStore.lenth;i++){
		reStr+=this.dataStore[i];
	}
	return reStr;
}

//冒泡排序
//原理：紧挨着的两个数比较大小。前面的大的话就交换位置，否则就不动继续比较下一位【1,2比较2,3比较....】
function Carray(numElement){
	this.dataStore=[];
	this.pos=0;
	this.numElement=numElement;
	this.setDate=setDate;
	this.insert=insert;
	this.toString=toString;
	this.clear=clear;
	this.swap=swap;
	for(var i=0;i<this.numElement;i++){
		this.dataStore[i]=i;
	}
}

//生成随机数
function setDate(){
	for(var i=0;i<this.dataStore.length;i++){
		this.dataStore[i]=Math.floor(Math.random()*(this.numElement+1));
	}
}
function insert(element){
	this.dataStore[this.pos++]=element;
}
function toString(){
	var str="";
	for(var i=0;i<this.dataStore.length;i++){
		str+=this.dataStore[i];
	}
	return str;
}
function clear(){
	this.dataStore.length=0;
}
function swap(arr,num1.num2){
	var temp;
	temp=arr[num1];
	arr[num1]=arr[num2];
	arr[num2]=temp;
}

//用上面的类实现的冒泡排序
	function bubbleSort(){
		var numElement=this.dataStore.length;
		var temp;
		for(var outer=numElement;outer>=2;--outer){
			for(var inner=0;inner<=outer;++inner){
				if (this.dataStore[inner]>this.dataStore[inner+1]) {
					swap(this.dataStore,inner,inner+1)
				}
			}
		}
	}
//选择排序的算法原理：
	//双层循环。外层循环i=0开始，内层循环是从j=i+1;开始。
	//


//检索算法
1.
//顺序查找
function search(arr,data){
	for(var i=0;i<arr.length;i++){
		if (arr[i]==data) {
			return i;
		}
	}
	return -1;
}

//查找最大最小值
function max(arr){
	var max=arr[0];
	for(var i=1;i<arr.length;i++){
		if (max<arr[i]) {
			max=arr[i]; //如果最大的数小于这个数的话就交换
		}
	}
	return max;
}
//自组织方式：就是把频繁超找的数据放到第一位上面(例如图书馆会把借的频率多的书放到第一位上面)
function seqSearch(arr,data){
	for(var i=0;i<arr.length;i++){
		if (arr[i]==data) {
			if (i>0) {
				swap(arr,i,i-1);
			}
		}
	}
}
function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}

//他的改进版本是：如果他的文职已经很接近前面的位置，则不进行改变，否则的话直接跟第一个交换
function seqSearch(arr,data){
	for(var i=0;i<arr.length;i++){
		if (arr[i]==data && i>(arr.length * 0.2)) {
			swap(arr,i,0){
				return true;
			}
		}else if (arr[i]==data) {
			return true;//not change
		}
	}
}
//二分法的原理：
	function binSearch(arr,data){
		var upperBound=arr.length-1;
		var lowerBound=arr[0];
		while(lowerBound <= upperBound){
			var mid=Math.floor(upperBound+lowerBound/2);
			if (arr[mid]<data) {
				lowerBound=mid+1;
			}else if(arr[mid]>data){
				upperBound=mid-1;
			}else{
				return mid;
			}
		}
		return -1;
	}
//计算数字重复的次数
//二分法：原理是先在里面查找到他所在的位置，
function Count(arr,data){
	var count=0;
	var position=binSearch(arr,data)；
	while(position>-1){
		count++;
		for(var i=position-1;i>0;i--){
			if (arr[i]==data) {
				count++;
			}else{
				break;
			}
		}
		for(var i=position+1;i<arr.length;i++){
			if (arr[i]==data) {
				count++;
			}else{
				break;
			}
		}
	}
	return count;
}


//ajax
function ajax(){
	var xmlHttp=null;
	try{
		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
	}catch(e){
		try{
			xmlHttp=new ActiveXObject("Microsoft.XMLHttp");
		}catch(e){
			xmlHttp=false;
		}
	}
	if(!xmlHttp && typeof XMLHttpReauest !="undefined"){
		xmlHttp=new XMLHttpReauest();
	}

	xmlHttp.open("get",url,true);
	xmlHttp.send();
	xmlHttp.onreaystateChange=function(){
		if(xmlHttp.readyState==4){
			if(xmlHttp.status>200 && xmlHttp.status<300 || xmlHttp.status==304 ){
				return xmlHttp.responseText;
			}
		}
	}
}
//jQuery:
	$.ajax({
		type:'get',
		url:"http://www.com",
		success:function(data){
			return data;
		}
		error:function(){
			return ;
		}
		complete:function(){
			//...
		}
	});
//缓冲运动
var oDiv=document.getElementById("div");
function move(iTarget){
	clearInterval(Timer);
	var timer=setInterval(function(){
		var speed=(iTarget-oDiv.offsetLeft)/5;
		speed=speed?Math.ceil(speed):Math.floor(speed);
		if(oDiv.offsetLeft==iTarget){
			clearInterval(Timer);
		}else{
			oDiv.style.left=Odiv.offsetLeft+speed+'px';
		}
	},30)
}


//闭包实现一个类
var User=function(){
	var name="defalut";
	return{
		getName:function(){
			return name;
		}
	}
}

(function(num){
	aLi[i].onclick=function(){
		return i;
	}
})(i)

/*******************************精通javascript************8.1表单的处理*************/
1.
//检查一个字段是否被修改
function checkRequired(elem){
	if (elem.type=="checkbox" || elem.type=="radio") {
		return getInputsByName(elem.name).numChecked;
	}else{
		return elem.value.length >0 && elem.value != elem.defalutValue;
	}
}
function getInputsByName(name){
	var result=[];
	result.numChecked=0; //设置修改的次数为零
	var input=document.getElementById("input");
	for(var i=0;i<input.length;i++){
		if (input[i].name=name) {
			result.push(input[i]);
			if(input[i].checked){
				result.numChecked++;
			}
		}
	}
return result;
}
window.onload=function(){
	var elem=document.getElementsByTagName("input")[0].onsubmit=function(){
		//获取需要检查的input元素
		var elem=document.getElementById("age");
		if(!checkRequired(elem)){
			//确保年龄的必填字段已经填写
			alert("Required filed is empty -"+"You must be over 13 to use this site");
			return false;
		}
		//获取需要检测的input元素
		var elem=document.getElementById("name");
		if(!checkRequired(elem)){
			alert("Required filed is empty -pls provide your name");
			return false;
		}
	};
};
//模式匹配
function checkEmail(elem){
	return elem.value=''|| /^[a-zA-Z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i.test(elem.value);
}
var elem=document.getElementById("email");
if(!checkEmail(elem)){
	alert("filed is not an eamil");
}
//检查input元素是否包含url
function checkURL(elem){
	return elem.value=""||!elem.value=='http://' || /^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/.test(elem.value/);
}
var elem=document.getElementById("url");
if(!checkURL(elem)){
	alert("Filed does not contain a URL");
}

//检查字段是否包含日期
function checkDate(elem){
	return !elem.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(elem.value);
}
//获取需要检查的元素
var elem=document.getElementById("date");
//检查这个字段是否包含正确的日期
if(!checkDate(elem)){
	alert("Filed is not a date");
}


//服务器的发送事件
1.SSE API：
var source=new EventSource("myevents.php");//传入的url必须是跟本页面同源
	readyState：//0:正在连接 1:打开连接 2:关闭连接
	open://在建立连接时触发
	message://从服务器接受新事件时触发
	error://无法连接时触发
	source.onmessage=function(event){
		var data=event.data;//返回的数据在event.data里面保存
	}
	source.close()://强制断开连接

2.事件流(不太懂)

3.web socket:
	//新兴API：在一个独立的持久的连接上提供全双工，双向通信.
	//js中创建了web socket 之后，会有一个HTTP请求发 送到浏览器上面以发起链接，在取得服务器的响应之后，
	//建立的连接会使用http升级从http协议交换为web socket协议。
	//所以只有支持这种协议的专门服务器才能正常的工作.
	//由于web socket 使用的是自定义的协议,所以是以 ws://(wss://)开头
	var socket=new WbeSocket("ws://www.example.com/sever.php");
	//建立之后浏览器会马上尝试连接
	readyState://opening, open, closing, closed.
	socket.close();
	//发送和接收
	socket.send("hello world");
	var message={
		time:new Date(),
		text:"hello world",
		clientId:'asdf451rew'
	}
	socket.send(JSON.stringify(message)); //web socket只能给服务器发送纯文本的数据
	socket.onmessage=function(event){
		var data=event.data;
		//服务器返回的数据data 也是一个字符串
	}
	open | error | close;

//对象的深度克隆
	function(obj){
		var i,o,j,k;
		if(typeof(obj) !=='object' || obj===null){
			return obj //普通对象的克隆
		}
		if(obj instanceof(Array)){
			o=[];
			for(var i=0,len=obj.length;i<len;i++){
				if(typeof(obj[i])=="object" && obj[i]==null){
					o[i]=arguments.callee(obj[i]);
				}else{
					o[i]=obj[i];
				}
			}
		}else{
			o={};
			for(var i in obj){
				if(typeof(obj[i]=="object" && obj[i]==null)){
					o[i]=arguments.callee(obj[i]);
				}else{
					o[i]=obj[i];
				}
			}
		}
	}

//JavaScript and XMl
1.兼容性处理 
   //浏览器对XML DOM 的支持
   var xmldom=document.implementation.createDocument("","root",null);
   var child=xmldom.createElement("child"); //创建一个子元素
   xmldom.documentElement.appendChild(child);//添加到xmldom中
   //DOMParser类型： --将xml解析为dom文档(把一行简单的字符串转换成DOM的文档)
   		var parser=new DOMParser();
   		var xmldom=parser.parseFromString("<root><child/><root/>","text/xml");
   		console.log(xmldom.documentElement.tagName); //root
   		console.log(xmldom.documentElement.firstChild.tagName);// child
   		var anotherchild=xmldom.createElement("next");
   		xmldom.documentElement.appendChild(anotherchild);
   	//XMLSerializer:与DOMParser的功能相反，他是把DOM文档转换成字符串
   		var serializer=new XMLSerializer();
   		var xml=serializer.serializerToString(xmldom);
   		console.log(xml);

   //IE8之前的版本的XMl
	function createDocument(){
		if(typeof arguments.callee.activeXString != "string"){
			var versions=["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument。3.0","MSXML2.DOMDocument"],i,len;
			for(var i=0,len=versions.length;i++){
				try{
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString=version[i];
					break;
				}catch(ex){
					//跳过
				}
			}
		}
		return new ActiveXObject(arguments.callee.activeXString);
	}
	//xml 生成
		var xmldom=createDocument();
		xmldom.loadXML("<root><child/></root>");
		console.log(xmldom.documentElement.tagName);//root
		//它的创建和生成XML的方法同其他浏览器一样
	//错误处理：
	if(xmldom.parseError !=0){
		alert("an error:"\n error code :+xmldom.parseError.errorCode+...../);
	}
	errorCode,filePos,line,linepos,reason,srcText,url
	//状态
	var xmldom=createDocument();
	xmldom.async=true;
	xmldom.onreadystatechange=function(){
		if(xmldom.readyState==4){
			if(xmldom.parseError !=0){
				//显示错误
			}else{
				//显示一些要查找的信息
			}
		}
	}
	xmldom.load(example.xml);




for(var i=0;i<arr.length;i++){
	for(var j=i;j<arr.length;j++){
		var p=true;
		if(p=true && arr[i]==arr[j]){
			return arr[j];
			p=false;
		}
	}
}




var a='wretywfgfgf';
var  x=0;
for(var i=0;i<a.length;i++){
	for(var j=0;j<i;j++){
		if(a.charAt(i)==a.charAt(j) && x<1){
			 console.log(a.charAt(j));
			 x++;
		}
	}
}
