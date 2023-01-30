var guestList=["akshay","bhaskar","chaithanya","dhanush",
"kruthika","sujay","suraj","ullas"];
var name=prompt("Enter your name!!!");
for(i=0;i<guestList.length;i++){
    if(name[i]===guestList[i]){
        alert("Welcome!!!");
    }else{
        alert("Sorry maybe next time");
    }
}