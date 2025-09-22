const squareDigits = (num) => {
  // algorithm
  //  1. take the number and extract each digits and reverse it, and then , again take one number at a time, and squre it and add it to a string, and return the string of numbers or convert it to number before returning

  // 2. take the num, and convert it to string , iterate over the string of numbers , take each character(number) convert to number and then square it, and add it to seperate answer string, and finally return it by again converting it to number.

  let text = num.toString();
  let answer = "";

  for (let i = 0; i < text.length; i++) {
    // converting both to number , doing square and then adding it to answer string.

    answer = answer + Number(text[i]) * Number(text[i]);
  }

  return Number(answer);
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
