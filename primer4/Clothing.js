import Product from "./Product.js";

//Error handling
function sizeValidation(data) {
  const options = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  if (typeof(data) !== 'string' || options.indexOf(data.trim()) === -1) { 
    throw new Error(`Clothing Size Invalid`);
  }
  return data.trim();
}
function materialValidation(data) {
  if (typeof(data) !== 'string' || data.trim().length < 3) { 
    throw new Error(`Clothing Material Invalid`);
  }
  return data.trim();
}

class Clothing extends Product{
  #size;
  #material;

  constructor(id, name, price, quantity, size, material) {
    super(id, name, price, quantity);
    this.#size = sizeValidation(size);
    this.#material = materialValidation(material);
  }

  getProductDetails() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      size: this.#size,
      material: this.#material
    };
  }
}

export default Clothing;