const XO = str => {
  // Your solution
  
  str = str.toLowerCase();
  let x = 0
  let o =0;
  
  for(let i=0;i<str.length;i++){
     if(str[i]=='x'){
         x++;
     }
     else if(str[i]=='o'){
         o++;
     }
  }
  
  if(x==o){
      return true;
  }else {
      return false;
  }
};


const XO2 = str => {
  const lowerStr = str.toLowerCase();
  let result = 0;
  for (const letter of lowerStr) {
    if (letter === 'x') {
      result++;
    } else if (letter === 'o') {
      result--;
    }
  }

  return !result;
};



console.log(XO('xo')); // true
console.log(XO('Oo')); // false
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('ooom')); // false
console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)