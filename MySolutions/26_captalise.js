String.prototype.capitalize = function () {
  // Your solution
  
  return this.split(" ").map((x)=>{
      return x[0].toUpperCase()+x.substring(1);
  }).join(" ");
  
  
};


String.prototype.capitalize2 = function () {
  return this.split(' ')
    .map(ele => ele[0].toUpperCase() + ele.slice(1))
    .join(' ');
};



var str = "How can mirrors be real if our eyes aren't real";
console.log(str.capitalize()); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'