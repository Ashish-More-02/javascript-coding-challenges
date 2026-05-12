// find the maximum number in an array using recursion
//
// Input:  [3, 7, 2, 8, 5, 1]
// Output: 8
//
// Hint: the max of an array is...
//       max( first element, max of the rest of the array )
//
// You can use Math.max(a, b) to compare two numbers.
//
//   Promise:        "Given an array, I return the largest number in it"
//   Base case:      when the array has only ONE element, return ________
//   Recursive case: Math.max( arr[0], maxInArray( ________ ) )
//
// Edge case to think about: what should we do if the array is empty?
// (it's reasonable to return -Infinity, or to require non-empty input)


function maxInArray(arr) {
    // your code here
    if(arr.length == 1){
        return arr[0];
    }
    else{
        return Math.max(arr[0], maxInArray(arr.slice(1)))
    }
}


console.log(maxInArray([3, 7, 2, 8, 5, 1]));  // 8
console.log(maxInArray([10]));                 // 10
console.log(maxInArray([-5, -2, -9, -1]));     // -1
