const arrayDiff = (a, b) => {
  // Your solution
  
  for(let i=0;i<b.length;i++){
      let matchingElementIndex = a.findIndex((element,index)=>element == b[i]);
      a.splice(matchingElementIndex,1);
  }
  
  return a;
  
};


const arrayDiff2 = (a, b) => {
  return a.filter(ele => !b.includes(ele));
};


console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([], [4, 5])); // []