// 单例模式


/**
 * 单例模式： 就是保证一个类只有一个实例，
 * 实现的方法就是： 判断实力存在与否，如果存在就直接返回，如果不存在就穿件之后再返回
 */

//暴露公有方法，保护私有方法
//
var mySingleton = function() {

	/** private function */

	var privateVariable = 'something private';

	function showPrivate() {
		console.log(privateVariable)
	}

	/** public function **/
	return {
		publicMethod: function() {
			showPrivate();
		},
		publicVar: 'the public can see this'
	}
}


var single = mySingleton();

single.publicMethod(); //something private

console.log(single.publicVar) //publicVar's string


var Singleton = (function() {
	var instantiated;

	function init() {
		return {
			publicMethod: function() {
				console.log("hello world")
			},
			publicProperty: 'test'
		}
	}

	return {
		getInstance: function() {
			if (!instantiated) {
				instantiated = init();
			}
			return instantiated
		}
	}
})()

//调用

Singleton.getInstance().publicMethod(); //hello world


/** 单例一般使用在系统之间各种模式的通信协调上 */


//实践

var SingletonTester = (function() {

	function Singleton(args) {
		var args = args || {}
		this.name = 'SingletonTester'
		this.pointX = args.pointX || 6
		this.pointY = args.pointY || 10
	}

	//实例化容器
	var instance;

	var _static = {
		name: "SingletonTester",

		getInstance: function(args) {

			if (instance === undefined) {
				instance = new Singleton(args)
			}

			return instance;
		}
	}

	return _static;

})();


// 调用

var SingletonTest = SingletonTester.getInstance({
	pointX: 5
})
console.log(SingletonTest.pointX)