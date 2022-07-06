(() => {
  type Size = 'S' | "M" | "L" | "XL" | false | 123;
  function createProductToJson(title: string, createdAt: Date, stock: number, size: Size) {
    return { title, createdAt, stock, size };
  }

  const createProductToJsonV2 = (title: string, createdAt: Date, stock: number, size?: Size) => {
    return { title, createdAt, stock, size };
  }

  const product = createProductToJson('P1', new Date(), 12, 'XL');
  const productV2 = createProductToJsonV2('p2', new Date(), 12);

  console.log(product);
  console.log(productV2);
})();
