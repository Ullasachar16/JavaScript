let name={
    firstname: "Akshay",
    lastname: "Saini"
}
let printName= function (){
    console.log(this.firstname+" "+this.lastname);
}
let printMyName = printName.bind(name);
printMyName();