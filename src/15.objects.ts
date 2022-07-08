(() => {
  type Product = { title: string, createdAt: Date, stock?: number };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({title: '', createdAt: new Date(2020, 1, 1)});
  addProduct({title: '', createdAt: new Date(2020, 1, 1), stock: 12});

  console.log(products);
})();
