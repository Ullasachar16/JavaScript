var i=99;
while(i>=0){
    console.log(i+" bottle of beer on the wall, "+i+" bottle of beer.\n"+
    "Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.");
    i--;
    if(i===1){
        console.log("No more bottles of beer on the wall, no more bottles of beer.\n"+"Go to the store and buys some more,"+" no more bottles of beer on the wall.") 
    }
    if(i===0){
        console.log("No more bottles of beer on the wall, no more bottles of beer.\n"+"Go to the store and buys some more,"+i+"bottles of beer on the wall.") 
     }
}

