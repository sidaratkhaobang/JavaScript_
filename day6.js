function findMaxProduct(arr){
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (i !== j){
                result = Math.max(result, arr[i] * arr[j]);
            }
        }
    }
    console.log(result);
}

findMaxProduct([-1,6,2,5,7]);