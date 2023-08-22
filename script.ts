interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
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

function findNameOfTallestMountain(tallestMountain:Mountain[]):string{
    let tallest:Mountain = tallestMountain[0];

    tallestMountain.forEach((m:Mountain) => {
        if (m.height > tallest.height){
            tallest = m;
        }
    });

    return tallest.name;
}

console.log(findNameOfTallestMountain(mountains));


interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
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

function calcAverageProductPrice(item:Product[]):number{
    let avg:number = 0;
    for(let i:number = 0; i < item.length; i++){
        avg += item[i].price;
    }
    avg = avg / item.length;

    return avg;
}

console.log(calcAverageProductPrice(products));


interface InventoryItem {
    product: Product;
    quantity: number;
}

let collection: InventoryItem[] = [
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

function calcInventoryValue(inventory:InventoryItem[]):number{
    
    let sum:number = 0;
    inventory.forEach((i:InventoryItem) => {
        sum += i.product.price * i.quantity
    })

    return sum;
}

console.log(calcInventoryValue(collection));