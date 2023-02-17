// taskwebpage javascript write here...

function HIDETABLE() {
    var y = document.getElementById("columnTableid");
    var z = document.getElementById("rowtableid");

    if (y.style.display === "contents" && z.style.display === "contents" ) {
        y.style.display = "none";
        z.style.display = "none";
    }  
}

function SHOWTABLE() {
    var x = document.getElementById("columnTableid");
    var p = document.getElementById("rowtableid");

    x.style.display = "contents";
    p.style.display = "contents";
}



