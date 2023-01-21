let name={
    firstname: "Akshay",
    lastname: "Saini"
}
let printName= function (hometown){
    console.log(this.firstname+" "+this.lastname+" ,"+hometown);
}
let printMyName = printName.bind(name,"Dehradun");
printMyName();

Function.prototype.mybind=function(...args){
    let obj=this;
    return function(){
        obj.call(args[0]);
    }
}

let printMyName1 = printName.mybind(name,"Dehradun");
printMyName1();
