var insertSort = function(arr){
    if(Object.prototype.toString.call(arr).slice(8,-1) === "Array"){
        for(var i=1; i<arr.length;i++){
            //首先将第一个元素认为已经排序
            var key = arr[i];
            //从第0个元素开始查找
            var j = i-1;
            //从后向前遍历，只要指定的条件为true, 循环就可以一直执行下去
            while(j>=0 && arr[j] > key){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = key;
            console.log(arr)
        }
        return arr;
    }else{
        console.log("this is not an array")
    }
}