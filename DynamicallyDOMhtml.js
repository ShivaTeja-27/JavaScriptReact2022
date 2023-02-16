// <!-- How to create html element dynamically -->
// use index.html and styles.css

var orderedlistcreated = document.createElement("ol"); // ol created outside function so that its loaded first

function displayList() {
    console.log(document);

    var Textboxlist1 = document.getElementById("textboxlist");

    var maintextboxlist = Textboxlist1.value;


    orderedlistcreated.style.color = "black";

    var listCreated = document.createElement("li");

    listCreated.style.color = "black";


    listCreated.innerText = maintextboxlist;

    orderedlistcreated.appendChild(listCreated);


    document.querySelector(".divinsert").appendChild(orderedlistcreated);

    Textboxlist1.value = "";
}