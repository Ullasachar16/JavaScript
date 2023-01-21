let name={
    firstname: "Akshay",
    lastname: "Saini"
}
let printName= function (hometown,state,country){
    console.log(this.firstname+" "+this.lastname+" ,"+hometown+" , "+state+" , "+country);
}
let printMyName = printName.bind(name,"Dehradun");
printMyName("Uttarakhand","India");

Function.prototype.mybind=function(...args){
    let obj=this;
    params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName1 = printName.mybind(name,"Dehradun");
printMyName1("Uttarakhand","India");
