function compress(str){
    let prev = str[0];
    let cnt = 1;
    let result = "";
    for (let i = 1; i < str.length; i++){
        if (str[i] === prev){
            cnt++;
        }else{
            result += cnt + prev;
            prev = str[i];
            cnt = 1;
        }
    }
    result += cnt + prev;
    console.log(result);
}


compress('aabbbv');