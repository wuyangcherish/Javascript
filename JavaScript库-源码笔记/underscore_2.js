/** underScore.js 源码照抄  哈哈**/

/** 前端网underscore.js源码分析资料 **/


/** * pairs 
	* 把一个对象转换成[key, value] 的形式的数组
**/

_.pairs = function(obj){
	var keys = _.keys(obj);
	var length = keys.length;
	var pairs = Array(length);
	for(var i=0; i<length; i++){
		pairs[i] = [keys[i], obj[keys[i]]]
	}
	
	return pairs;
}


/** * invert 
	* 反转对象 把key 和value 反过来
**/

_.invert =  function(obj){
	var result = {};
	var keys = _.keys(obj); //获取到keys值
	for(var i=0; i<keys.length;i++){
		result[obj[keys[i]]] = keys[i]
	}
	
	return result;
}

/** functions methods 
	* 获取对象的所有方法名称 返回一个排序好的数组
**/

_.functions = _.methods = function(obj){
	var names = [];
	for(var key in obj){
		//如果是方法  则添加进去
		if(_.isFunction(obj[key]))  names.push(key);
	}
	
	return names.sort(); //sort() 用的是插入排序
}

/** 判断对象是否为空 **/
_.isEmpty = function(obj){
	if(obj ==  null) return true;
	if(isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) 
		return obj.length ===0;
	
	return _.keys(obj).length === 0;
}
