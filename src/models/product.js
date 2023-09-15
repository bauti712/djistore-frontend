export class Product {
    src
    name
    price

    constructor(src = '', name = '', price = 0){
        this.src = src;
        this.name = name;
        this.price = price;
    }
}