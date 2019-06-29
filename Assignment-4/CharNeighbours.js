var word="IBHUBS"
var ch="J"
if(word.indexOf(ch)!=-1){
    if(word.indexOf(ch)==word.length-1){
        console.log(word[word.indexOf(ch)-1])
    }
    else if(word.indexOf(ch)==0){
        console.log(word[word.indexOf(ch)+1])
    }
    else{
        console.log(word[word.indexOf(ch)-1]+""+word[word.indexOf(ch)+1])
    }
}
else{
    console.log("Given letter does not exist in the string")
}