obj1={1:"One",2:"Two"}
obj2={}
for (p in obj1){
    obj2[obj1[p]]=p
}
console.log(obj2['One'])