import { addProduct, calcStock, products } from "./product.service";


addProduct({title: '', createdAt: new Date(), stock: 12});
console.log(products);
console.log(`Total Stock: ${calcStock()}`);
