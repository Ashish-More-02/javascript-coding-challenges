// sum of digits using recursion 

// input : 1234
// output : 10


let sum = 0;

function sumOfDigits(num){

    if(num<=0){
        return sum;
    }

    sum = sum + num%10;

    return sumOfDigits(Math.floor(num/10));
}


function sumOfDigitsOptimised(num){

    // if num is 0 then we want to add 0 into our sum
    if(num===0){
        return 0;
    }

    return (num%10) + sumOfDigitsOptimised(Math.floor(num/10));
}

let num = 1234;

let answer = sumOfDigits(num);

console.log(answer);



console.log(sumOfDigitsOptimised(num));

