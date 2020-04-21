function fiindMin(arr){
    let L = 0;
    let R = arr.length - 1;
    let result = -1;
    while (L <= R){
        let mid = Math.floor(L + (R - L) / 2);
        if(arr[mid] <= arr[arr.length - 1]){
            result = arr[mid];
            R = mid - 1;
        }else{
            L = mid + 1;
        }
    }

    console.log(result);
}

fiindMin([3,5,6,8,9]);