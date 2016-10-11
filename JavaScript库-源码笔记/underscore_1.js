/** underScore.js 源码照抄  哈哈**/


var _ = function(obj){
	// instanceof 用来测试一个对象在其原型链构造函数上面是否具有 prototype 属性 返回的是 boolean值
	// 下面的是判断 _.prototype 是否存在于 obj 上面。
	if(obj instanceof _) return obj;
	if(!(this instanceof _)) return new _(obj);
	this._wrapped = obj;  
}

/** 有关 instanceof 的使用示例 **/

var _= function(obj){
	console.info("传进来的值是：",obj); // Kay or Jane
	console.info('this 的指向是：',this);
	if(obj instanceof _){
		console.info("走的是这个哦~",obj);
		return obj;
	}
	if(!(this instanceof _)){
		console.info('这个会自动添加 new',obj);
		return new _(obj);
	}
	this.obj = obj; //这一步有时候会改变this的指向的
}

var name1 = new _("Kay");
console.log(name1.obj); //this -> _{}

var name2 = _('Jane');
console.log(name2.obj) //this -> window{}


/** 一个空的函数 **/

// 创建一个空的函数   在创建接口的时候写成这样浏览器就不用创建多个匿名函数了
_.noop = function(){};

/** Random 函数**/

_.random = function(min,max){
	if(max == null){
		max = min;
		min = 0;
	}
	//Math.random 返回的是0~1 之间的随机数 --也就是后面产生的是差值数
	return min + Math.floor(Math.random()*(max-min +1))
}

//例子：

function randomNum(max,min){
	// 如果传的参数反了的话换回来
	if(max<min){
		var temp = max;
		max = min;
		min = temp
	}
	if(max == null){
		max = min;
		min = 0;
	}
	return min + Math.floor(Math.random()*(max-min+1))
}

var r1 = randomNum(2,23);
console.log("r1",r1);

var r2 = randomNum(23,2)
console.log("r2",r2);

/** 判断 obj 是否是undefined**/
_.isUndefined = function(obj){
	//void 的作用的是计算表达式 始终返回 undefined
	return obj === void 0;
}


/** 判断 obj 是否是 null**/
_.isUndefined = function(obj){
	//void 的作用的是计算表达式 始终返回 undefined
	return obj === null;
}

/** 判断是否是一个数组 Array **/

var ObjProto = Object.prototype;
var toString = ObjProto.toString;
var nativeIsArray = Array.isArray;

_.isArray = nativeIsArray || function(obj){
	return toString.call(obj) == '[object Array]'
}

/** 其他验证 **/

_.each(['Arguments','Function','String','Number','Date','RegExp','Error'], function(name){
	-["is"+name] = function(obj){
		return toString.call(obj) === '[object'+name+']'
	}
})

// 上面的 Arguments 有兼容性问题所以：有一段兼容性的代码
if(!_.isArguments(arguments)) {
	_.isArguments = function(obj){
		return _.has(obj,'callee')   //浏览器会根据 callee属性是否存在判断是否是Arguments
	}
}

//IE 11 && safari 8 有关 function 的问题

if(typeof /./ != 'function' && typeof Int8Array = 'object') {
	_isFunction = function(obj){
		return typeof obj === 'function' || false;
	}
}


// 自己判断的时候可以使用 typeof a === 'function' 直接判断


/** underscore 判断是否是 boolean 值 **/

_.isBoolean = function(obj){
	return obj === true || obj === false || toString.call(obj) === '[object Boolean]'
}

//至于为什么会有后面那一项 是因为 new Boolean() 也算是 布尔值



/** 判断 NaN **/

//NaN 特点 1. 是数字  2. NaN 不等于 NaN

// +obj -> 转换成数字

_.isNaN = function(obj){
	return _.isNumber(obj) && obj !== +obj;
}

/** 判断是不是无限大 **/

// 前面是判断是不是无限大的一个全局函数 后面是对NaN 做了一个排除
_isFinite = function(obj){
	return isFinite(obj) && !isNaN(parseFloat(obj));
}


/** 判断是否是对象 **/

//&& 的优先级比 || 高；
// !!obj 是为了排除null

_.isObject = function(obj){
	var type = typeof obj;
	return type === 'function' || type === 'object' && !!obj; 
}


/** 判断是否是元素 **/

//nodeType === 1 是元素
_.isElement = function(obj){
	return !!(obj && obj.nodeType ===1);
}


/** 判断一个集合是否是类数组 isArrayLike(内部函数) **/

var MAX_ARRAY_INDEX = Math.pow(2,53)-1;
var isArrayLike = function(collection){
	//数组是一个有长度的集合  --- 并且这个长度是个有意义的数值
	var length = collection != null && collection.length;
	return typeof length == 'number' && length >=0 && length <= MAX_ARRAY_INDEX;
}

/** contains includes include函数**/
_.contains = _.includes = _.include = function(obj,target,fromIndex){
	if(isArrayLike(obj)) obj = _.values(obj);
	return _indexOf(obj,target, typeof fromIndex =='number' && fromIndex >=0);
}

//其中 _.values 函数 ——.indexOf 函数 is:

_.values = function(obj){
	var keys = _.keys(obj); //该方法在紧接着的下面
	var length = keys.length;
	var values = Array(length);
	
	for(var i=0;i<length; i++){
		values[i] = obj[keys[i]]
	}
	
	return values;
}

/** Keys **/

var nativeKeys = Object.keys;
_.keys = function(obj){
	//如果 obj 不是对象则返回一个空的数组
	if(_.isObject(obj)) return [];
	
	//如果支持原生的keys 则使用原生 keys
	if(nativeKeys) return nativeKeys(obj);
	
	//否则遍历找到key值
	var keys = [];
	for(var key in obj) if(_.has(obj,key)) keys.push(key);
	
	//ie9下兼容
	if(hasEnumBug) collectNonEnumProps(obj,keys);
	
	return keys;
}

//上面关于ie6~8 的那个bug ：对象原型里面toString是不可以枚举的，但是{toString:1212} 这个应该是可以枚举的
// 但是ie6~8 也认为这个不可以枚举  所以就要做一下兼容性的处理

//判断是否有枚举的属性 --- ie 低版本得到的是true;  chrome等得到的是false;
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');

//不让枚举的属性有哪些
var nonEnumerableProps = ['valueOf','isPrototypeof','toString','propertyIsEnumerable',
						  'hasOwnProperty','toLocalString'];

function collectNonEnumProps(obj,keys){
	
	//计算不可枚举属性长度
	var nonEnumIdx = nonEnumerableProps.length;
	
	var constructor = obj.constructor;
	
	//obj 的原型
	
	var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	//constructor 单独处理
	var prop = 'constrcutor';
	
	//如果对象有constrcutor 属性并且keys 数组中也有，添加进去
	if(_.has(obj,prop) && !_.contains(keys,prop)) keys.push(prop);
	
	while(nonEnumIdx--){
		prop = nonEnumerableProps[nonEnumIdx];
		
		//如果属性在obj 中并且跟原型表示的不一样 那么也添加进来
		if(prop in obj[prop] !== proto[prop] && !_.contains(keys,prop)){
			keys.push(prop);
		}
	}
}

















