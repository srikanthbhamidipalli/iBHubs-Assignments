a=[{fullName:'Sita',age:16},{fullName:'Ram',age:19},{fullName:'Lakshman',age:15}]
function isEligible(value){
    return value.age>18;
}
var eligibleVoters=a.filter((value) => {return value.age>18;})
console.log(eligibleVoters)