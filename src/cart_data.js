import { Product } from "./models/product"


class CartData {

    products

    constructor(products = []){
        this.products = products
    }

    addProductToCart(product = new Product()){
        this.products.push(product)
    }

}

export const cartData = new CartData()
