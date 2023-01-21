let name={
    firstname: "Akshay",
    lastname: "Saini",
}
let printFullName= function (hometown){
    console.log(this.firstname+" "+this.lastname+ " from "+hometown);
}
printFullName.call(name,"Dehradun");

let name1={
    firstname: "Sachin",
    lastname: "Tendulkar",
}

printFullName.call(name1,"Mumbai");