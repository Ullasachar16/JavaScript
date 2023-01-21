let name={
    firstname: "Akshay",
    lastname: "Saini",
}
let printFullName= function (hometown,state){
    console.log(this.firstname+" "+this.lastname+ " from "+hometown+ " , "+state);
}
printFullName.call(name,"Dehradun","Uttarakhand");

let name1={
    firstname: "Sachin",
    lastname: "Tendulkar",
}

//function borrowing
printFullName.call(name1,"Mumbai","Maharashtra");

//apply method
printFullName.apply(name1,["Mumbai","Maharashtra"]);

//bind method
let printMyName=printFullName.bind(name1,"Mumbai","Maharashtra");
console.log(printMyName);
printMyName();