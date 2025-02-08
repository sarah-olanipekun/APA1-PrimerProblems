import Product from "./Product.js";

//Error handling
function stringValidation(data, name = 'String') {
  if (typeof(data) !== 'string' || data.trim() === '') { 
    throw new Error(`${name} Invalid`);
  }
  return data.trim();
}

class Electronics extends Product{
  #brand;
  #warranty;

  constructor(id, name, price, quantity, brand, warranty) {
    super(id, name, price, quantity);
    this.#brand = stringValidation(brand, 'Brand');
    this.#warranty = stringValidation(warranty, 'Warranty');
  }

  getProductDetails() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      brand: this.#brand,
      warranty: this.#warranty
    };
  }
}

export default Electronics;