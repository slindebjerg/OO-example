var db = {
  "products":
    [
      {
        "title": "Jar of Dirt",
        "price": 2499,
        "description": "Can be used to escape the evil grip of The Flying Dutchman."
      },
      {
        "title": "Jar of Bert",
        "price": 9,
        "description": "Used to be part of Bert, now it's in a jar."
      },
      {
        "title": "Jar of Birth",
        "price": 24999,
        "description": "Kinda icky."
      },
      {
        "title": "Jar of Girth",
        "price": 499,
        "description": "Not safe for work."
      }
    ]
}

class Store{
  constructor(productDatabase, cart){
    this.productArray = this.populateProductArray(productDatabase)
    this.cart = cart
  }

  populateProductArray(db){
    var productArray = []
    db.products.forEach(function (e) {
      productArray.push(new Product(e.title, e.price, e.description))
    })
    return productArray
  }

  pushNewProductToList(newProduct){
    this.productArray.push(newProduct)
  }
}

class Product {
  constructor (title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }

  getTitle() { return this.title }
  getPrice() { return this.price }
  getDescription() { return this.description }
  setTitle(newTitle) { this.title = newTitle }
  setPrice(newPrice) { this.price = newPrice }
  setDescription(newDescription) { this.description = newDescription }
}

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

class SubProduct extends Product {
  constructor (title, price, description, category) {
    super(title, price, description)
    this.category = category
  }

  getCategory () { return this.category }
}

store = new Store(db, new Cart)