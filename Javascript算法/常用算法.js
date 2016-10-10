/**
    首先是数组去重
    
**/

/*
    方法1 ： 
        1. 声明一个新的数组来放过滤后的数组
        2. 用indexOf 判断一下在该新数组中是否存在该值 
            1. 有的话忽略
            2. 没的话将该数组加入到数组中去
*/

function removeRepeatNum(arr) {
	var newArr = [];
	for(var i=0; i<arr.length;i++) {
		if(newArr.indexOf(arr[i]) == -1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

/**
    方法2 : 
        1. 升名一个hash表  和一个数组
            1. 凡是第二次显示的数组在a 里面都是true; 偶会直接return 掉
            2. 第一次显示的数字首先在a 里面有存储为true 然后再存储到r中
**/
function removeRepeatNum(arr) {
	var a = {}; r = [];
    for(var i=0;i<arr.length;i++){
        if(!a[arr[i]]) {
            a[arr[i]] = true;
            r.push(arr[i]);
        }
    }
    return r;
}



















