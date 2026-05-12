// sum of all numbers in an array using recursion
//
// Input:  [1, 2, 3, 4, 5]
// Output: 15
//
// Hint: think of the array as [first element] + [rest of array]
//   - first element: arr[0]
//   - rest of array: arr.slice(1)
//
//   Promise:        "Given an array, I return the sum of its elements"
//   Base case:      when the array is ________, return ________
//   Recursive case: arr[0] + arraySum( ________ )
//
// Edge case: what should arraySum([]) return?


function arraySum(arr) {
    // your code here
    if(arr.length == 0){
        return 0;
    }
    if(arr.length == 1){
        return arr[0];
    }

    return arr[0] + arraySum(arr.slice(1));

}


const input = [1, 2, 3, 4, 5];
console.log(arraySum(input));   // 15
console.log(arraySum([]));      // 0
console.log(arraySum([42]));    // 42
