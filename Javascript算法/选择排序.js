/*
    首先第一层循环是从0 ~ 倒数第二
    内层的循环式从i ~ 最后一个
    如果发现i 后面的数字小于i位置上面的数字 那么就将该数字与 i 位置上面的换一下，
    然后继续循环直到结束
*/

var selectSort = function(arr){
    if(Object.prototype.toString.call(arr).slice(8,-1) === "array"){
        if(arr.length<=1){
            return arr;
        }
        var len = arr.length;var tmp;
        for(var i=0;i<len-1;i++){
            var min = arr[i];
            
            for(var j=i+1; j<len;j++){
                //min大于arr[j]则交换
                if(arr[j]<min){
                    tmp = min;
                    min = arr[j];
                    arr[j] = tmp;
                }
            }
            arr[i] = min;
        }
        return arr;
    }else{
        console.log("this is not an array");
    }
}