const accum = (str) => {
  // Your solution
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    answer += str[i].toUpperCase() + str[i].repeat(i) + "-";
  }

  answer = answer.slice(0, -1);

  return answer;
};

const accum2 = (str) => {
  return str
    .split("")
    .map((ele, index) => ele.toUpperCase() + ele.toLowerCase().repeat(index))
    .join("-");
};

console.log(accum("abcd")); // 'A-Bb-Ccc-Dddd'
console.log(accum("cwAt")); // 'C-Ww-Aaa-Tttt'
console.log(accum("RqaEzty")); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
