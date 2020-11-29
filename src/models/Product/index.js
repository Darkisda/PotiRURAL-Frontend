export default class Product {
  constructor() {
    this.productName = '';
    this.price = 0;
    this.meansurement = '';
  }

  setProductName(productName) {
    this.productName = productName;
  }

  setPrice(price) {
    this.price = price;
  }

  setMeansurement(meansurement) {
    this.meansurement = meansurement;
  }
}
