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
    params=args.slice(1);
    return function(){
        obj.apply(args[0],params);
    }
}

let printMyName1 = printName.mybind(name,"Dehradun");
printMyName1();
