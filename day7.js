function maxsetProduct(arr) {
  let productPositive = 1;
  let negative = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      productPositive *= arr[i];
    } else {
      negative.push(arr[i]);
    }
  }
  negative.sort((a, b) => a - b);
  let maxProductNegative = Number.MIN_SAFE_INTEGER;
  let productNegative = 1;
  for (let i = 0; i < negative.length; i++) {
    productNegative *= negative[i];
    maxProductNegative = Math.max(maxProductNegative, productNegative);
  }
  if (negative.length === arr.length){
      console.log(maxProductNegative);
  }else{
      console.log(Math.max(productPositive * maxProductNegative,productPositive));
  }
}

maxsetProduct([1, 2, 3]);
