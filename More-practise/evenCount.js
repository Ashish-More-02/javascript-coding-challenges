function countEvens(arr) {
  // your solution here
  let evenCount = 0;

  //check for, not a array , return false
  if (!Array.isArray(arr)) {
    return false;
  }

  // check for if the array is empty
  if (arr.length == 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    // Check if the first element is a finite number before initializing.
    if (!Number.isFinite(arr[i])) {
      // This handles cases like [NaN, 1], [Infinity, 2], or ['a,1]
      return false;
    }

    if (arr[i] % 2 == 0) {
      evenCount++;
    }
  }

  return evenCount;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(countEvens(arr));
