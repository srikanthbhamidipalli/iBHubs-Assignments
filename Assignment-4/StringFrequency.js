a=['a','a','b','d','e']
string_frequency = {}

for(i=0;i<a.length;i++){
    if(a[i] in string_frequency){
        var v=string_frequency[a[i]]
        string_frequency[a[i]]=v+1;
    }
    else{
    count=0
    count++;
    string_frequency[a[i]]=count;   
    }
}

console.log(string_frequency)