students=[{"name":"john","id":1,"gpa":7.8},{"name":"rick","id":2,"gpa":3.9},{"name":"lisa","id":3,"gpa":8.9},{"name":"john","id":1,"gpa":8.9}]
var uniq={}
var filtered = students.filter(obj => !uniq[obj.id] && (uniq[obj.id]= true))
var A=0,B=0,C=0,D=0,F=0;
filtered.forEach(element => {
    if(element.gpa >= 8)
        D++;
    else if(element.gpa >= 7 && element.gpa <8)
        A++;
    else if(element.gpa >=6 && element.gpa <7)
        B++;
    else if(element.gpa >=4 && element.gpa <6)
        C++;
    else
        F++;
});

console.log("Distinction: "+D)
console.log("A Grade: "+A)
console.log("B Grade: "+B)
console.log("C Grade: "+C)
console.log("Fail: "+F)