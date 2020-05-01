function longsetDupSubString(str){
    for (let length = str.length - 1; length >= 1; length--){
        for (let startIndex = 0; startIndex <= str.length - length; startIndex++){
            const substr = str.slice(startIndex, startIndex + length);
            if(str.indexOf(substr) !== str.lastIndexOf(substr)){
                console.log(substr);
                // return substr;
            }
        }
    }
    // console.log("not found!!");
}


longsetDupSubString("abdab");