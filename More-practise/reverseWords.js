function reverseWords(sentence) {
    // Your implementation
    
    //approach : 2 pointer approach
    // iterate through the string , and keep the first pointer at start of the word , and second on the end of the word , we know this if we find a space after the word, apply more checks 
    // then using another loop reverse the word and store it in place
    // return the expected string 
    
    
    let pointer1 = -1;
    let pointer2 = -1;
    let answerString="";
    
    for (let i=0;i<sentence.length;i++){
        
        // first pointer allocation : word starting
        if(sentence[i]!==" " && pointer1===-1){
            pointer1=i;
        }
        
        //second pointer allocation : word ending
        if(sentence[i]===" " && pointer2===-1 && pointer1!==-1){
            pointer2=i-1;
        }
        
        // second pointer allocation for last word:
        if(pointer1!== -1 && i==sentence.length-1){
            pointer2=i;
        }
        
        //if both pointers are pointing towards a word , we reverse it
        if(pointer1!=-1 && pointer2!=-1){
            
            for(let j=pointer2;j>=pointer1;j--){
                answerString += sentence[j];
            }
            
            //reset pointers
            pointer1 = -1;
            pointer2 = -1;
        }
        
        if(sentence[i]==" "){
            answerString +=" ";
        }
        
    }
    
    return answerString;
}


console.log(reverseWords("  Hello  World   "));