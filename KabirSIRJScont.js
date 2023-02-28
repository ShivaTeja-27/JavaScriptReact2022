var userDetails = [
    {
        image:
            "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
        name: "Chris",
        gender: "male",
        email: "Chris@gmail.com",
        city: "Delhi",
        phone: 99999999,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
        image:
            "https://cdn4.vectorstock.com/i/1000x1000/95/28/cartoon-male-teacher-vector-16659528.jpg",
        name: "Adam",
        gender: "male",
        email: "adam@gmail.com",
        city: "Mumbai",
        phone: 888888888,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
        image:
            "https://i.pinimg.com/originals/7f/68/fc/7f68fc74675dc2234ba931f826263cd3.jpg",
        name: "Swapna",
        gender: "female",
        email: "swapna@gmail.com",
        city: "Banglore",
        phone: 98989765431,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
        image: "https://wallpapercave.com/wp/wp7141936.jpg",
        name: "zoya",
        gender: "female",
        email: "zoya@gmail.com",
        city: "Hyderabad",
        phone: 98989876543,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
];

function fnShowTable() {
    var tableRow = document.getElementById("tableRow");
    var btnHide = document.getElementById("hide");
    var btnShow = document.getElementById("show");
    var tbody = document.getElementById("tbody");

    var tr1 = document.createElement("tr"); // <tr>  </tr>
    var td1 = document.createElement("td"); //td>  </td>
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var img = document.createElement("img");

    var tr2 = document.createElement("tr"); // <tr>  </tr>
    var td6 = document.createElement("td"); //td>  </td>
    var td7 = document.createElement("td");
    var td8 = document.createElement("td");
    var td9 = document.createElement("td");
    var td10 = document.createElement("td");
    var img2 = document.createElement("img");

    img.src = userDetails[0].image;
    img.height = 50;
    img.width = 50;
    img.style.borderRadius = "50%";
    td1.appendChild(img);

    img2.src = userDetails[1].image;
    img2.height = 50;
    img2.width = 50;
    img2.style.borderRadius = "50%";
    td6.appendChild(img2);

    td2.innerText = userDetails[0].name;
    td3.innerText = userDetails[0].gender;
    td4.innerText = userDetails[0].email;
    td5.innerText = userDetails[0].city;

    td7.innerText = userDetails[1].name;
    td8.innerText = userDetails[1].gender;
    td9.innerText = userDetails[1].email;
    td10.innerText = userDetails[1].city;

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);

    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);
    tr2.appendChild(td9);
    tr2.appendChild(td10);

    tbody.appendChild(tr1);
    tbody.appendChild(tr2);

    tableRow.style.display = "block";
    btnHide.disabled = false;
    btnShow.disabled = true;
}

function fnHideTable() {
    var tableRow = document.getElementById("tableRow");
    var btnHide = document.getElementById("hide");
    var btnShow = document.getElementById("show");

    tableRow.style.display = "none";
    btnHide.disabled = true;
    btnShow.disabled = false;
}