const positiveSum = arr => {
  // Your solution
  
  let answer = arr.reduce((acc,curr)=>{
     if(curr >0){
         acc = acc + curr;
     }
     return acc;
  },0)
  
  return answer;
};


const positiveSum2 = arr => {
  return arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);
};



console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0