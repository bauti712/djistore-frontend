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
  getCountedProducts(){
    const productMap = {}
    this.products.forEach(element =>{
      if (element.id in productMap){
        productMap[element.id]=productMap[element.id]+1
      }else{
        productMap[element.id]=1
      }

    })
    return productMap
  }
}

export const cartData = new CartData();
