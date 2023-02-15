// Document object modelprovide you the all the detailsof your static HTML pageand also provideDom manipulationto convert the HTML file into a dynamic web page

// For examplethere is a static HTML pagewith a header welcome to HTMLand there is a buttonso using the JavaScriptdominationwe can assignhey buttonwith an onclick eventwhich canchange the header2hello TO JavaScript
// follow index.html for dom html 



console.log(document);

console.log("refer index.html for understanding also style.css")

function changeDom() {
    console.log(document);
    var welcomeID = document.getElementById("WelcomeHtmlid");

    welcomeID.innerHTML = "hello Java script dom panuplated using innerHTML";

    var changeColor = document.getElementById("DOM");

    changeColor.style.color = "yellow";
    changeColor.style.backgroundColor = "red"
    changeColor.style.padding = "10px";

    var changeButton = document.getElementById("btnChange");

    changeButton.style.backgroundColor = "blue";
    changeButton.style.color = "white";
}
/////////////////////////////////////////


// <!-- On click of a buttonfor exampleinput should get into the HTML tag? -->
function OnClick() {
    console.log(document);

    var textBox = document.getElementById("textbox");
    var ReplaceText = document.getElementById("replacetexthere");

    var Maintextbox = textBox.value;

    ReplaceText.innerHTML = Maintextbox;

    textBox.value = "";  // removes text from textfiled after button click

}

/////////////////////////////////////////////////////////
// <!-- show hidden password code js -->

function ShowHidePassword() {
    console.log(document);
    var passwordInput = document.getElementById("PassInput");
    var hideButton = document.getElementById("passBtn");


    // passwordInput.type = "text";
    // hideButton.innerText = "Hide Password";

    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        hideButton.innerText = "Hide Password";
    }
    else{
        passwordInput.type = "password";
        hideButton.innerText = "Show Password"
    }

}