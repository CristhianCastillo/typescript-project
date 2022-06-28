(() => {
  let prices = [1,2,3,4,5,6,7,8,9, 'true', false];
  prices.push(7,8,8);

  let products = ['Hola', true];
  products.push(false);

  let mixed: (number | string | boolean)[] = [];
  mixed.push(true, 90);
  mixed.push('Cristhian', 'Castillo', 24);


  let numbers = [1,2,3,4,5,6,7];
  numbers.map(item => item * 2);

})();
