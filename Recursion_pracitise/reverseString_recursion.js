// reverse a string using recursion

// Input: "hello"
// Output: "olleh"


function reverseString(str){
    
    if(str.length <=0){
        return "";
    }

   
    // this reverseString() will give us the reverse of any string 
    return  reverseString(str.slice(1)) + str[0]  ;
}


const input  = "hello";

console.log(reverseString(input));