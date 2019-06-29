var s="you progress the nation follows"
var splitted=s.split(" ")
var result=''
var max=splitted[0].length
for(i=1;i<splitted.length;i++){
    if(splitted[i].length>max){
        max=splitted[i].length;
        result=splitted[i];
       
    }
}
console.log(result)