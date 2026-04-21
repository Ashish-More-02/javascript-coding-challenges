const spinWords = str => {
  // Your solution
  
  let answer = str.split(" ").map((value , index)=>{
      if(value.length >=5){
          return value.split("").reverse().join("");
      }
      else{
          return value;
      }
  })
  
  return answer.join(" ");
};

const spinWords2 = str => {
  return str
    .split(' ')
    .map(word => (word.length < 5 ? word : word.split('').reverse().join('')))
    .join(' ');
};

console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is another test')); // 'This is rehtona test'