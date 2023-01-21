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

printFullName.call(name1,"Mumbai","Maharashtra");