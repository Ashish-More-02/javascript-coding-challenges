const past = (h, m, s) => {
  // Your solution
//   1 second = 1000 miliseconds
    let miliseconds = 0;
    
    // convert hours into miliseconds and then add
    for(let i=0;i<=h;i++){
        let hour = i*60*60*1000;
        miliseconds +=hour;
    };
    // convert minutes into miliseconds and then add
    for(let j=0;j<=m;j++){
        let minutes = j*60*1000;
        miliseconds +=minutes;
    }
    // convert seconds into miliseconds and then add
    for(let k=0;k<=s;k++){
        let seconds = k*1000;
        miliseconds +=seconds;
    }
    
    return miliseconds;
};

// time complexity = O(n) 

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000