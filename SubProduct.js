class SubProduct extends Product {
  constructor (title, price, description, category) {
    super(title, price, description)
    this.category = category
  }

  getCategory () { return this.category }
}