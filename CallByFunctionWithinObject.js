// callback function within object
console.log("\n functions within object accessing:===>");

var product = {
    pname : "iphone 13",
    price: 90000,
    qty: 5,
    totalAmount: function(){
        console.log("The Total Amount is:: ",product.price * product.qty);
    },
};

product.totalAmount()  // use open paranthes to execute function within object

////// using Return function

console.log("\n functions within object accessing using Return:===>")

var items = {
    pname : "iphone 13",
    price: 90000,
    qty: 5,
    totalAmount: function(){
        // console.log("The Total Amount is:: ",items.price * items.qty);
        return items.price * items.qty;
    },
};

console.log(items.totalAmount("iphone 13"));