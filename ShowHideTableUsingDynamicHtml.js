// <!-- JS Conf. 46.26sec -->


// {/* <thead>
// <tr>
//   <th scope="col">#</th>
//   <th scope="col">First</th>
//   <th scope="col">Last</th>
//   <th scope="col">Handle</th>
// </tr>
// </thead>

// <tbody>
// <tr>
//   <th scope="row">1</th>
//   <td>Mark</td>
//   <td>Otto</td>
//   <td>@mdo</td>
// </tr> 
// </tbody>*/}

function SHOWTABLE() {

    // div element
    var myDivElement = document.getElementById("mainDiv");

    var myTable = document.createElement("table");
    myTable.id = "tableID";
    myTable.style.display = "contents";
    


    myDivElement.appendChild(myTable);

    // table head element

    var myTableHead = document.createElement("thead");
    myTableHead.id = "myTableHeadid";
    

    myTable.appendChild(myTableHead);

    var mytableHeadElement = document.getElementById("myTableHeadid");
    // table row  element

    var tr = document.createElement("tr");
    tr.id = "myTR";

    mytableHeadElement.appendChild(tr);


    // th element header 
    var th = document.createElement("th");
    th.scope = "col";
    th.id = "columnID"
    th.style.display = "contents";


    tr.appendChild(th);

    var column1 = document.createTextNode("# ");
    var column2 = document.createTextNode("First name ");
    var column3 = document.createTextNode("Last name ");
    var column4 = document.createTextNode("Email ");

    th.appendChild(column1);
    th.appendChild(column2);
    th.appendChild(column3);
    th.appendChild(column4);

    ////////////////////////////////////////for table rows
    // <tbody>
    // // <tr>
    // //   <th scope="row">1</th>
    // //   <td>Mark</td>
    // //   <td>Otto</td>
    // //   <td>@mdo</td>
    // // </tr> 

    var myTableBody = document.createElement("tbody");
    myTableBody.id = "myTableBodyid";

    myTable.appendChild(myTableBody);


    // tr 1 created
    var tablerowElement1 = document.createElement("tr");
    tablerowElement1.id = "tableRow1";

    myTableBody.appendChild(tablerowElement1);

    var thRow1 = document.createElement("th");
    thRow1.scope = "row";
    thRow1.id = "rowid1";

    tablerowElement1.appendChild(thRow1)

    var row1 = document.createTextNode("1 ");
    thRow1.appendChild(row1);


    var td1 = document.createElement("td");
    thRow1.appendChild(td1);
    var TD1 = document.createTextNode("Mark ");
    td1.appendChild(TD1);

    var td2 = document.createElement("td");
    thRow1.appendChild(td2);
    var TD2 = document.createTextNode("jhon ");
    td2.appendChild(TD2);

    var td3 = document.createElement("td");
    thRow1.appendChild(td3);
    var TD3 = document.createTextNode("Markjhon@gmail.com ");
    td3.appendChild(TD3);

   // tr 2 created
   var tablerowElement2 = document.createElement("tr");
   tablerowElement2.id = "tableRow2";

   myTableBody.appendChild(tablerowElement2);

   var thRow2 = document.createElement("th");
   thRow2.scope = "row";
   thRow2.id = "rowid2";

   tablerowElement2.appendChild(thRow2)

   var row2 = document.createTextNode("2 ");
   thRow2.appendChild(row2);


   var tdtwo1 = document.createElement("td");
   thRow2.appendChild(tdtwo1);
   var TDd1 = document.createTextNode("shiva ");
   tdtwo1.appendChild(TDd1);

   var tdtwo2 = document.createElement("td");
   thRow2.appendChild(tdtwo2);
   var TDd2 = document.createTextNode("GKSTEJA ");
   tdtwo2.appendChild(TDd2);

   var tdtwo3 = document.createElement("td");
   thRow2.appendChild(tdtwo3);
   var TDd3 = document.createTextNode("Shivateja.gks@gmail.com ");
   tdtwo3.appendChild(TDd3);
}



function HIDETABLE() {

    let mytablehideElement = document.getElementById("tableID");
    let tableROW = document.getElementById("columnID");
    

    if (mytablehideElement.style.display === "contents" && tableROW.style.display === "contents" ) {
        
        mytablehideElement.style.display = "none";
        tableROW.style.display = "none";
        
    }

}





