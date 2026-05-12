// check if a string is a palindrome using recursion
//
// A palindrome reads the same forwards and backwards.
//
// Input:  "racecar"      Output: true
// Input:  "hello"        Output: false
// Input:  "a"            Output: true   (single char is a palindrome)
// Input:  ""             Output: true   (empty string is a palindrome)
//
// Hint: do NOT reverse the string and compare — that defeats the point.
// Instead: compare the FIRST and LAST characters,
//          then recurse on the MIDDLE portion.
//
//   Promise:        "Given a string, I return true if it's a palindrome"
//   Base case:      when the string has length ________ or ________, return ________
//   Recursive case: if first === last, trust the answer for the middle.
//                   if first !== last, you can short-circuit and return ________
//
// To get the middle: str.slice(1, -1)   (drops first and last char)

 
function isPalindrome(str) {
    // your code here
    if(str.length == 1 || str.length == 0){
        return true;
    }
    else{ 
        if(str[0] == str[str.length-1]){
            return isPalindrome(str.slice(1,-1))
        }
        else{
            return false;
        }
    }
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("a"));       // true
console.log(isPalindrome(""));        // true
console.log(isPalindrome("abcfba"));    // false
