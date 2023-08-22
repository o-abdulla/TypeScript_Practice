var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(tallestMountain) {
    var tallest = tallestMountain[0];
    tallestMountain.forEach(function (m) {
        if (m.height > tallest.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
console.log(findNameOfTallestMountain(mountains));
var products = [
    {
        name: "Keyboard",
        price: 100
    },
    {
        name: "Monitor",
        price: 300
    },
    {
        name: "Phone",
        price: 500
    }
];
function calcAverageProductPrice(item) {
    var avg = 0;
    for (var i = 0; i < item.length; i++) {
        avg += item[i].price;
    }
    avg = avg / item.length;
    return avg;
}
console.log(calcAverageProductPrice(products));
var collection = [
    {
        product: {
            name: "motor",
            price: 10.00,
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50,
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1,
        },
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    var sum = 0;
    inventory.forEach(function (i) {
        sum += i.product.price * i.quantity;
    });
    return sum;
}
console.log(calcInventoryValue(collection));
