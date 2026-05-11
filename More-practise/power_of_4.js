function isPowerOfFour(n) {
  // your function implementation

  if (n <= 0 || isNaN(n)) {
    return false;
  }

  if (n == 1) {
    return true;
  }

  // there are 2 solutions one with bit manipulation and one without 

  // without bit manipulation
  // keep diviving by 4 until you cannot , if you finally reach 1 -> true , false otherwise
  // because if it is multiple of 4 , then finally it should return 1.
  // 64 -> 16 -> 4 -> 1
  // 32 -> 8 -> 2 (here 2%4 = 2 )

   
  while (n % 4 == 0) {
    n = n / 4;
  }

  if (n === 1) {
    return true
  }
  else {
    return false;
  }


}

let n = 64;

console.log(isPowerOfFour(n));