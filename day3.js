function costToMake(a,b){
    let prev = -1;
    let cost = 0;
    for (let i = 0; i < a.length; i++){
        if(a[i] === b[i]){
            prev = -1;
        }else{
            if (prev !== -1 && prev !== +a[i]){
                prev = -1;
            }else{
                cost++;
                prev = +a[i];
            }
        }
    }
    console.log(cost);
}

costToMake("001","100");