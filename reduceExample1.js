const array=[5,1,3,2,6];
//find max
//normal way

function findMax(array){
    let max=0;
    for(let i=0;i<=array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        return max;
    }
}
console.log(findMax(array));

