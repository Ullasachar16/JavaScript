let name={
    firstname: "Akshay",
    lastname: "Saini"
}
let printName= function (hometown,state,country,continent){
    console.log(this.firstname+" "+this.lastname+" ,"+hometown+" , "+state+" , "+country+" , "+continent);
}
let printMyName = printName.bind(name,"Dehradun","Uttarakhand");
printMyName("India","Asia");

Function.prototype.mybind=function(...args){
    let obj=this;
    params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName1 = printName.mybind(name,"Dehradun","Uttarakhand");
printMyName1("India","Asia");
