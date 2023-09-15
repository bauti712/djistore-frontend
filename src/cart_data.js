import { Product } from "./models/product";

class CartData {
  products;

  constructor(products = []) {
    this.products = products;
  }

  addProductToCart(product = new Product()) {
    this.products.push(product);
  }
  removeProductFromCart(product = new Product()) {
    for(let i = 0; i < this.products.length; i++){
        if(product.name === this.products[i].name){
            this.products.splice(i, 1);
            return;
        }
    }
  }
}

export const cartData = new CartData();
