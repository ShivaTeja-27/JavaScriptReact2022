// REturn function ==> after its written in last nothging written after it executes so follow below pattern:::
console.log("RETURN FUNction method");

function fnAdd(x,y){
    var num1 = x;
    var num2 = y;

    var res = num1 + num2;

    return res;
    // // console.log("hello") //this do not execute as its written after return function so do not write any thing after return function implemented 
}

var result = fnAdd(200,350);
console.log(result);


// next CallBack functions also check