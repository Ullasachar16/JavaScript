const arr=[5,1,3,2,6];

function isOdd(x){
    return x%2;
}

function isEven(x){
    return x%2===0;
}
 
function greaterthan4(x){
    return x > 4;
}
 
const output=arr.filter(isEven);
console.log(output);

const output1=arr.filter(function isEven(x){
    return x%2===0;
});
console.log(output1);

const output3=arr.filter((x)=> x>4);
console.log(output3);