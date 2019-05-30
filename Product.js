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

// class SubProduct extends Product {
//   constructor (title, price, description, category) {
//     super(title, price, description)
//     this.category = category
//   }

//   getCategory () { return this.category }
// }