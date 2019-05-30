class Cart {
  constructor() {
    this.productsInCart = []
  }

  pushToCart (product) {
    this.productsInCart.push(product)
  }

  // removeFromCart (product)

  getProductsInCart () {return this.productsInCart}
}