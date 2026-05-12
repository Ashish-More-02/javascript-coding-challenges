// match only the standalone words "cat" 

let text = "cat scatter category wildcat cat";

let answer = text.match(/\bcat\b/gi);

console.log(answer);