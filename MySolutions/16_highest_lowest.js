const highAndLow = (numbers) => {
  // Your solution

  let arr = numbers.split(" ");
  // console.log(arr);

  let highest = -1;
  let lowest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    // checking for highest number
    if (Number(arr[i]) > highest) {
      highest = Number(arr[i]);
    }

    // checking for lowest number
    if (Number(arr[i]) < lowest) {
      lowest = Number(arr[i]);
    }
  }

  let answer = highest.toString() + " " + lowest.toString();
  return answer;
};

const highAndLow2 = (numbers) => {
  const arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
};

console.log(highAndLow("1 2 3 4 5")); // '5 1'
console.log(highAndLow("1 2 -3 4 5")); // '5 -3'
console.log(highAndLow("1 9 3 4 -5")); // '9 -5'
console.log(highAndLow("0 -214 542")); // '542 -214'
