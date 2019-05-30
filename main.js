var db = {
  "products":
    [
      {
        "title": "Jar of Dirt",
        "price": "2499",
        "description": "Can be used to escape the evil grip of The Flying Dutchman."
      },
      {
        "title": "Jar of Birth",
        "price": "24999",
        "description": "Kinda icky."
      },
      {
        "title": "Jar of Girth",
        "price": "499",
        "description": "Not safe for work."
      }
    ]
}

class Store{
  constructor(productDatabase){
    this.productArray = this.populateProductArray(productDatabase)
    console.log(this.productArray)
  }

  populateProductArray(db){
    var productArray = []
    db.products.forEach(function (e) {
      productArray.push(new Product(e.title, e.price, e.description))
    })
    return productArray
  }
}

class Product {
  constructor (title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }
}

store = new Store(db)