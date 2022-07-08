(() => {
  const login = (email: string, password: string) => {
    console.log(email, password)
  }

  const loginV2 = (data: { email: string, password: string }) => {
    console.log(data.email, data.password)
  }

  login('cristhian117', '123456');
  loginV2({ email: 'Cristhian', password: '1234567' });

  const products: any[] = [];

  const addProduct = (data: { title: string, createdAt: Date, stock?: number }) => {
    products.push(data);
  }

  addProduct({title: '', createdAt: new Date(2020, 1, 1)});
  addProduct({title: '', createdAt: new Date(2020, 1, 1), stock: 12});

  console.log(products);


})();
