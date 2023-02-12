// mob name, price, rating out of 5
function mobileName(Mobiles) {

    switch (Mobiles) {
        case "iphone13":
            iphone13 = [{
                mobile: 'iphone13',
                price: 1332000,
                rating: 4
            }]
            console.log(iphone13)
            break;
        case "vivo":
            vivo = [{
                mobile: 'vivo',
                price: 122000,
                rating: 3
            }]
            console.log(vivo)
            break;
        case "moto":
            moto = [{
                mobile: 'moto',
                price: 122000,
                rating: 2
            }]
            console.log(moto)
            break;
        default:
            console.log("mobile not available in list!!!")
    }

}

mobileName("iphone13");
mobileName("moto");
mobileName("vivo");

mobileName("samsung"); // not in list 


// output
// [ { mobile: 'iphone13', price: 1332000, rating: 4 } ]
// [ { mobile: 'moto', price: 122000, rating: 2 } ]
// [ { mobile: 'vivo', price: 122000, rating: 3 } ]
// mobile not available in list!!!