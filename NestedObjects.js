var Student = {
    id : 111,
    name : "teja",
    phone: 1234567899,

    address:{
        Area:{
            area1: "diamond point",
            area2: " Centerpoint",
            area3: "parklane point",
            area4: "jwell point",
        },
        city: "HYDERABAD",
        state: "Telangana",
        country: "india",

    },
};

console.log(Student.address.Area.area1)
console.log(Student.address.Area)
console.log(Student.address.city)
console.log(Student.address.country)
console.log(Student.address.state)

Student.address.city = "SEcunderabad";
console.log(Student)
