const findShort = str => {
  // Your solution
  
  let shortestWordLen = Number.MAX_SAFE_INTEGER;
  
  str.split(" ").forEach((value)=>{
      if(value.length < shortestWordLen){
          shortestWordLen = value.length;
      }
  })
  
  return shortestWordLen;
};

const findShort2 = str => {
  return Math.min(...str.split(' ').map(word => word.length));
};

console.log(findShort('Test where final word shortest see')); // 3
console.log(findShort('Lets all go on holiday somewhere very cold')); // 2
console.log(findShort('i want to travel the world writing code one day')); // 1