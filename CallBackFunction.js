// CALL BACK FUNCTIONS==> A FUNCTION passed by Arguments to another function argumented withen it is called callback
console.log("CALL BACK FUNCTIONS==> A FUNCTION passed by Arguments to another function argumented withen it is called callback");

// Callback function method

function fnCall(total) {

    total();
    var data ={
        name: "ThunderBird",

    };
    console.log(data.name);

    total();
}

fnCall(function () {
    var price = 1500;
    var quantity = 3;

    console.log(price * quantity);
});

