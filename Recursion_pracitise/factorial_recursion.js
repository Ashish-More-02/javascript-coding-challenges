// factorial of a number using recursion
//
// factorial(n) = n * (n-1) * (n-2) * ... * 1
//
// Input:  5
// Output: 120        (because 5 * 4 * 3 * 2 * 1 = 120)
//
// Edge cases to think about:
//   - What should factorial(0) return?  (by definition: 1)
//   - What if n is 1?
//
// Before writing code, fill this in on paper:
//   Promise:        "Given n, I return ________"
//   Base case:      when n is ________, return ________
//   Recursive case: trust factorial(n-1), then combine with ________


function factorial(n) {
    // your code here

    if(n == 1){
        return 1;
    }

    return n * factorial(n-1);
}


const input = 5;
console.log(factorial(input));  // 120
