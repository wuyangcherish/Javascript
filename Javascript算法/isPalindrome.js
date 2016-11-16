/** 判断一个字符串是否是对称的 ---递归 **/

function isPalindrome(str) {
	if(typeof str === 'string'){
		if(str.length <= 1) {
			return true;
		}
		if(str.charAt(0) !== str.charAt(str.length-1)){
			return false;
		}
		return isPalindrome(str.substr(1,str.length-2))
	}
}

var str1 = 'asdfghhdf';
var str2 = 'asdffdsa';

console.log('str1',isPalindrome(str1)); //false
console.log('str2', isPalindrome(str2)) //true