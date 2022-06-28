(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product will change';
  console.log('Product Title: ', productTitle);

  let productDescription = "I'm Product description for test";
  let productPrice = 2345;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log(summary);
})();
