// non Premitive data type( OBJECT, ARRAY, MAP)
// Object ==> {}

Datatypes_Non_Primitive = " non Premitive 3 data type( OBJECT, ARRAY, MAP)"
console.log(Datatypes_Non_Primitive)

var ObjectName = {
    id : 101,
    name : "shivatejagks",
    city: "Hyd",
    phone: 1234567899,
};

console.log(ObjectName)
console.log(ObjectName.phone)
console.log(ObjectName.city)
console.log(ObjectName.id)

var Student = {
    id : 111,
    name : "teja",
    city: "Hydpally",
    phone: 1234567899,
};

console.log(Student)
// Accessing object items using .DOT

console.log(Student.phone)
console.log(Student.city)
console.log(Student.name)
console.log(Student.id)

// // Inserting new items in onject student
Student.email = "15054ie218@gmail.com";
Student.state = "Ap";
console.log(Student)


Student.email = "Shiovyekmsl@gmail.com"; // updation of existeng item 
Student.phone = 2222222222; // updation of existeng item 

console.log(Student)

