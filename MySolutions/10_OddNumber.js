const findOdd = arr => {
  const oddMap = new Map();
  let answer = 0;
  
  for(let i=0;i<arr.length;i++){
      if(!oddMap.get(arr[i])){
          // if the value does not exist for this key yet
           oddMap.set(arr[i],1);
      }
      else{
          oddMap.set(arr[i],(oddMap.get(arr[i]))+1);
      }
  }
  
  oddMap.forEach((value,key)=>{ 
      if(value%2 !==0){
          answer = key;
      }
  });
  
  return answer;
};

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); // 1
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
console.log(findOdd([10])); // 10