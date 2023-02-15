// dark mode html, css, bootstrap in index.html file
// <!-- DARK MODE USING JS -->

function CheckBOXdark(){
    console.log(document);
    var checkBox = document.getElementById("CheckBOXID");
    var divDarkmode = document.getElementById("darkmode")
    var DarkmodeName1 = document.getElementById("DarkmodeName1");
    var DarkmodeName2 = document.getElementById("DarkmodeName2");
    var DarkmodeName3 = document.getElementById("DarkmodeName3");
    var DarkmodeName4 = document.getElementById("DarkmodeName4");

    // var MainCheckbox = checkBox.checked;

        if(checkBox.checked){
          //it is checked
          console.log("checked");
          DarkmodeName1.style.color = "white";
          DarkmodeName2.style.color = "white";
          DarkmodeName3.style.color = "yellow";
          DarkmodeName4.style.color = "white";
          divDarkmode.style.backgroundColor = "black";

        }else{
          //it isn't checked
          console.log("not");
          DarkmodeName1.style.color = "black";
          DarkmodeName2.style.color = "black";
          DarkmodeName3.style.color = "blue";
          DarkmodeName4.style.color = "black";
          divDarkmode.style.backgroundColor = "white";
        }
      


}