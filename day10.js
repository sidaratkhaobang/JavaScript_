function parenthesis(n){
    const addPar = (cur, open, close) => {
        if (cur.length === n * 2){
            res.push(cur);
            return;
        }
        if (open < n){
            addPar(cur + '(', open + 1, close);
        }
        if (close < open){
            addPar(cur + ')', open, close + 1);
        }
    };
    const res = [];
    addPar('',0,0);
    console.log(res);
}



parenthesis(2);