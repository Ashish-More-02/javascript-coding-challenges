const descendingOrder = n => {
  // Your solution
  
//   algorithm -> convert number to string , then to array , apply sort , and convert it back to string and then number and return the final product.

    // first half
    let str = n.toString();
    let arr = str.split("");
    // console.log(arr);
    
    arr.sort((a,b) => b-a);
    // console.log(arr);
    
    
    //second half
    let answer = arr.join("");
    return Number(answer);
    
};

const descendingOrder2 = n => {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
};

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321