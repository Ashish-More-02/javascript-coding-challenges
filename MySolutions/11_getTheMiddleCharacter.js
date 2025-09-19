const getMiddle = str => {
  // Your solution
  let answer = "";
  let strlen = str.length;
  
  // for even case returning middle 2 characters
  if(strlen%2 ==0){
      answer = str[(strlen/2)-1]+str[strlen/2];
  }
  else{
      answer = str[Math.floor(strlen/2)];
  }
  
  return answer;
  
};

console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'