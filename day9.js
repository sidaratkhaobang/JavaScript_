function maxSum(arr){
    if (arr.length === 1)
        return arr[0];
    
    let noDelete = {};
    let oneDelete = {};

    noDelete[0] = arr[0];
    oneDelete[0] = 0;

    let answer = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++){
        noDelete[i] = Math.max(noDelete[i-1] + arr[i], arr[i]);
        oneDelete[i] = Math.max(noDelete[i-1], oneDelete[i-1] + arr[i]);
        answer = Math.max(answer, Math.max(noDelete[i], oneDelete[i]));
    }
    console.log(answer);
}

maxSum([1, -2, 0, 3]);