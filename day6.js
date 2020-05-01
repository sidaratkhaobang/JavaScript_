function isPrime(x){
    let cnt = 0;
    for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++){
        if (x % i === 0){
            cnt++;
        }
    }
    return cnt === 0;
}

function getPrimeOrder(p){
    let order  = -1;
    for (let i = 2; i <= p; i++){
        if (isPrime(i)){
            order++;
        }
    }
    return order;
}

function getPrimesIndex(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (!isPrime(arr[i])){
            result.push(-1);
        }else{
            console.log(getPrimeOrder(arr[i]));
            // result.push(getPrimeOrder(arr[i]));
        }
    }
    console.log(result);
    // return result;
}

getPrimeOrder([2,11,100,31]);