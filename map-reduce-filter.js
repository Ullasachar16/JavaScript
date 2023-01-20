const users=[
    {firstName:"ullas",lastName:"achar",age:23},
    {firstName:"akshay",lastName:"saini",age:26},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"maanasa",lastName:"choudhary",age:23},
];

const output1=users.map((x)=>x.firstName+""+x.lastName);
console.log(output1);

const output2=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output2);