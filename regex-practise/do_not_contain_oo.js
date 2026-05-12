// match words not containing "oo"

let text = "book food cat spoon dog loop";

// used negative lookahed ( but it only check for the pattern, but does not consume the words)

let pattern  = /\b(?!\w*oo)\w+\b/gi;

let answer = text.match(pattern);

console.log(answer);