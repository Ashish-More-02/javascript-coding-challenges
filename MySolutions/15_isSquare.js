const isSquare = (n) => {
  // Your solution
  let tempSqrt = Math.sqrt(n);

  if (n == 0) {
    return true;
  }
  if (Number.isInteger(tempSqrt)) {
    return true;
  } else {
    return false;
  }

  // Number.isInteger(tempSqrt)  ,
  // check if the given number is pure integer or not any other thing like float , infinity , or NaN, etc.
  // integer is only pos or negative whole number
};

const isSquare2 = n => {
  return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(3)); // false
console.log(isSquare(93)); // false
console.log(isSquare(-1)); // false
