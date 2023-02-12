// Create an application ifit's an even numberyou add 10 to eatif it's an odd numberthen multiply 10 to number ?

function fnArray(){
    
    var arr = [100, 2, 40, 70, 5, 65];
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[x]);

        if (arr[i] % 2 == 0){
           
            arr[i] = arr[i] + 10;
        }
        else{
            arr[i] = arr[i] * 10;
        }
    }
    console.log(arr)
}

fnArray();


// output--
// PS C:\User\Desktop\JavaScriptReact2022> node EvenAddOddMultiplyloop
// [ 110, 12, 50, 80, 50, 650 ]