const findOutlier = (arr) => {
  // Your solution

  // everyone is either odd or even , expect one element , find the odd one out

  let oddCount = 0;
  let oddNum = 0;
  let evenCount = 0;
  let evenNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenCount++;
      evenNum = arr[i];
    } else {
      oddCount++;
      oddNum = arr[i];
    }
  }

  if (oddCount == 1) {
    return oddNum;
  } else {
    return evenNum;
  }
};

const findOutlier2 = (arr) => {
  const evenArray = arr.filter((ele) => ele % 2 === 0);
  const oddArray = arr.filter((ele) => ele % 2 !== 0);
  return evenArray.length === 1 ? evenArray[0] : oddArray[0];
};

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([160, 3, 1719, 19, 13, -21])); // 160
console.log(findOutlier([4, 0, 100, 4, 11, 2602, 36])); // 11
