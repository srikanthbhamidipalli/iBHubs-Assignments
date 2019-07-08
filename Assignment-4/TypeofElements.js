a=[]
var number=0;
var string=0;
var object=0;
for(i=0;i<a.length;i++){
    switch(typeof a[i]){
        case "number" : 
        number++;
        break;
        case "string" : string++;break;
        case "object" : object++;break;
        default : ;
    }
}

console.log(number+","+string+","+object)