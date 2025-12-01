function findSmallest(arr) {
  // your solution here

  let smallest = 0;

  //check for, not a array , return false
  if (!Array.isArray(arr)) {
    return false;
  }

  // check for if the first element is not a number 
  if (!isNaN(arr[0])) {
    smallest = arr[0] || 0;
  }

  // check for if the array is empty 
  if (arr.length == 0) {
    return null;
  }

  // Check if the first element is a finite number before initializing.
  if (!Number.isFinite(arr[0])) {
    // This handles cases like [NaN, 1], [Infinity, 2], or ['a', 1]
    return false;
  }
  

  for (let i = 1; i < arr.length; i++) {

    if (isNaN(arr[i])) {
      return false;
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  // return smallest number
  return smallest;
}


let arr = [1.5 , 6,5, -9.8];

console.log(findSmallest(arr));






// Constraints

// Input must be an array of finite numbers
// Return false for non-array inputs
// Return false for arrays containing non-number values
// Return false for arrays containing NaN, Infinity, or -Infinity
// For an empty array, return null



// Test Cases

// Base cases: empty array [] -> null, single [ x ] -> x
// Mixed arrays: [ 3, 1, 2 ], [ -5, 2, -3, 4 ]
// All negatives: [ -1, -2, -3 ]
// All positives: [ 1, 2, 3 ]
// Decimals: [ -1.5, -0.1, 0, 2.2 ]
// Invalid inputs: null, undefined, 42, '8', {}, () => {}, [1, 'a'], [NaN], [Infinity]
// Base cases: empty array [] -> null, single [ x ] -> x
// Mixed arrays: [ 3, 1, 2 ], [ -5, 2, -3, 4 ]
// All negatives: [ -1, -2, -3 ]
// All positives: [ 1, 2, 3 ]
// Decimals: [ -1.5, -0.1, 0, 2.2 ]
// Invalid inputs: null, undefined, 42, '8', {}, () => {}, [1, 'a'], [NaN], [Infinity]