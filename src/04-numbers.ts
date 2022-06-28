(() => {
  let productPrice = 100;
  productPrice = 123.90;
  console.log(productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('Customer Age: ', customerAge);

  let productInStock: number;
  console.log(productInStock);
  if(productInStock > 10) {
    console.log('Print that greated!');
  }


  let discount = parseInt('123');
  console.log('Discount: ', discount);

  let hex = 0xfff;
  console.log('hex: ', hex);

  let bin = 0b1010; // 10
  console.log('Binary number: ', bin);

  let number: number = 100;
})();
