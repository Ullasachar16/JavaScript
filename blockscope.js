// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
// console.log(b);
// console.log(c);
// }
// console.log(a); //it shadows here the same value inside block as same result
// console.log(b);
// console.log(c);

//shadowing in functions
const c=100;
function x(){
    const c=30;
    console.log(c);
}
console.log(c);
x();