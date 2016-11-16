
var arr = [23,56,1,67,37,67,8989,0];
    /*
        每次都循环的是i之后的数字 如果有比min小的数字则将min跟该数字换一下 直到最后循环结束
    */
function selectSort(arr){
    var len = arr.length; var tmp;
    for(var i=0;i<len-1;i++){
        var min = arr[i];
        for(var j = i+1; j<len;j++){
            if(arr[j]<min){
                tmp = min;
                min = arr[j];
                arr[j] = tmp;
            }
        }
        arr[i] = min;
    }
    return arr;
}
selectSort(arr)