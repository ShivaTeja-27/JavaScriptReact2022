// Array Functions are of types==> push(), unshift(), pop(), shift(), length
console.log("\n Array Functions are of types==> push(), unshift(), pop(), shift(), length")

var arr = [30, 40, 50, 12, 60, 96, 100];
console.log(arr.length);  // length==> gives length of array list
console.log(arr);

arr.push(50000)  // push()==> Adds elements to LAST Position of arraylist
console.log(arr);

arr.unshift(111111) // unshift()==> Adds elements to FIRST POSITION of arraylist
console.log(arr);

arr.pop()
console.log(arr);  // 50000 is deleted drom Last ONLY

arr.pop()
console.log(arr); // next 100 from last is poped out =100

arr.shift()
console.log(arr);  // shift() removed 11111 from list first position

arr.shift()
console.log(arr);  // removed 30 from list first position

console.log("\n Accessing of array");

console.log(arr);
console.log(arr[3]);