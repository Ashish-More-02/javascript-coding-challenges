// nth fibonacci number using recursion
//
// Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//   fib(0) = 0
//   fib(1) = 1
//   fib(n) = fib(n - 1) + fib(n - 2)
//
// Input:  6
// Output: 8
//
// This problem is interesting because it has TWO base cases
// and TWO recursive calls (not one). Think carefully:
//
//   Promise:        "Given n, I return the nth fibonacci number"
//   Base cases:     when n is ________, return ________
//                   when n is ________, return ________
//   Recursive case: combine fib(n-1) and fib(n-2) how?


function fibonacci(n) {
    // your code here

    if( n == 0){
        return 0;
    }
    if( n == 1 || n == 2){
        return 1;
    }


    return fibonacci(n-1) + fibonacci(n-2);
}


const input = 7;
console.log(fibonacci(input));
