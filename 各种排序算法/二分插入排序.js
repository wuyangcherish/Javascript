var binaryInsertionSort = function(arr){
    if(Object.prototype.toString.call(arr).slice(8,-1) === 'Array'){
        //循环整个数组
        for(var i=1; i<arr.length; i++){
            var key = arr[i];
            var left = 0;
            var right = i-1;
            while(left <= right){
                var middle = parseInt((left+right)/2);
                //判断是在左边插入还是在右边插入
                if(key < arr[middle]){
                    right = middle-1;
                }else{
                    left = middle+1;
                }
            }
            for(var j = i-1; j>=left;j--){
                arr[j+1] = arr[j];
            }
            arr[left] = key;
        }
//        return arr;
        console.log(arr);
    }else{
        console.log("this is not an Array");
    }
}