// Arrays[] with in Object{} (Arrays of objects)
console.log("\n Arrays[] with in Object{} (Arrays of objects)===>");

var student = {
    name: "Shivateja",
    address: {
        city: "hyd",
        state: "Telangana",
    },
    marks: [50, 20, 30, 40, 70, 88]   // // student.marks[3]
};

console.log(student.marks[3]);

/////////////////////////////////////////////////////

var ArrayHasMultipleObjects = {

    marks: [
        {
            name: "Maths",
            score: 70,
        },

        {
            name: "science",
            score: 40,
        },

        {
            name: "Hindi",
            score: 80,
        },

        [
            {
                city: "DELHI",            // // ArrayHasMultipleObjects.marks[3][0].city
                // country : "India",    // // ArrayHasMultipleObjects.marks[3][1].country
            },
        ],
    ]
};
console.log(ArrayHasMultipleObjects)

console.log(ArrayHasMultipleObjects.marks[0].score)
console.log(ArrayHasMultipleObjects.marks[1].score)
console.log(ArrayHasMultipleObjects.marks[2].score)

console.log(ArrayHasMultipleObjects.marks[0].name)
console.log(ArrayHasMultipleObjects.marks[1].name)
console.log(ArrayHasMultipleObjects.marks[2].name)


console.log(ArrayHasMultipleObjects.marks[3][0].city)
// console.log(ArrayHasMultipleObjects.marks[3][1].country)

