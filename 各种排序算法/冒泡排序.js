//从大到小排列
var bubbleSort = function(arr){
    for(var i=0;i<arr.length; i++){
        for(var j=0;j<=i;j++){
            if(arr[i]>arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = arr[i];
            }  

        }
        return arr;
    }
}

//从小到大排列
var bubbleSort = function(arr){
    for(var i=0;i<arr.length; i++){
        for(var j=0;j<=i;j++){
            if(arr[i]<arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = arr[i];
            }  

        }
        return arr;
    }
}
