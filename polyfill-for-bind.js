let name={
    firstname: "Akshay",
    lastname: "Saini"
}
let printName= function (hometown,state){
    console.log(this.firstname+" "+this.lastname+" ,"+hometown+" , "+state);
}
let printMyName = printName.bind(name,"Dehradun");
printMyName("Uttarakhand");

Function.prototype.mybind=function(...args){
    let obj=this;
    params=args.slice(1);
    return function(){
        obj.apply(args[0],params);
    }
}

let printMyName1 = printName.mybind(name,"Dehradun");
printMyName1("Uttarakhand");
