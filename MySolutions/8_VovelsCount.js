
// Solution -1
const getCountBasic = str => {
  let count =0;
  str = str.toLowerCase();
  
  for(let i=0;i<str.length;i++){
      if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' ){
          count++;
      }
  }
  
  return count;
  
};


// solution -2
const getCountIncludes =(str)=>{
    let count =0;
    
    str = str.toLowerCase();
    
    for(let char of str){
        if('aeiou'.includes(char)){
            count++;
        }
    }
    
    return count;
}

// Solution-3  : using arr.filter method
const getCount = (str)=>{
    str = str.toLowerCase();
    const StrArray = [...str];
    
    let answer = StrArray.filter((element)=>{
        return ['a','e','i','o','u'].includes(element)
    }).length;
    
    return answer;
    
}

console.log(getCount('my pyx')); // 0
console.log(getCount('pear tree')); // 4
console.log(getCount('abracadabra')); // 5
console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
console.log(getCount('Ashish is a good boi')); // 8