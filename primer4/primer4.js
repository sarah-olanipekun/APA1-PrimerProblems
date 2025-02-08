import Product from "./Product.js";
import Inventory from "./Inventory.js";
import Clothing from "./Clothing.js";
import Electronics from "./Electronics.js";

// Sample usage
const inventory = new Inventory();
const product1 = new Product("A123", "T-shirt", 19.99, 100);
const product2 = new Product("B456", "Jeans", 49.99, 50);

try {
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  inventory.updateQuantity("A123", 50);
  const retrievedProduct = inventory.getProduct("B456");
  console.log(retrievedProduct);
  inventory.removeProduct("A123");
} catch (error) {
  console.error("An error occurred:", error.message);
}
