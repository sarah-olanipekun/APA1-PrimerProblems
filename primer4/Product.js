//Error handling functions
function stringValidation(data, name = 'String') {
  if (typeof(data) !== 'string' || data.trim() === '') { 
    throw new Error(`${name} Invalid`);
  }
  return data.trim();
}
function priceValidation(data) {
  if (isNaN(data) || data < 0) {
    throw new Error(`Price Invalid`);
  }
  return parseFloat(data);
}
function quantityValidation(data) {
  if (isNaN(data) || data % 1 !== 0 || data < 0) {
    throw new Error(`Quantity Invalid`);
  }
  return parseInt(data);
}

class Product {
  #id;
  #name;
  #price;
  #quantity;

  constructor(id, name, price, quantity) {
    this.#id = stringValidation(id, 'ID');
    this.#name = stringValidation(name, 'Name');
    this.#price = priceValidation(price);
    this.#quantity = quantityValidation(quantity);
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get price() {
    return this.#price;
  }

  get quantity() {
    return this.#quantity;
  }
  
  set quantity(newQuantity) {
    this.#quantity = quantityValidation(newQuantity);
  }

  getProductDetails() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    };
  }
}

export default Product;