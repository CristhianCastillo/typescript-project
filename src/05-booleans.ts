(() => {
  let isEnable = true;
  let isNew: boolean = false;

  console.log('Is New: ', isNew);
  console.log('Is Enable: ', isEnable);

  const random = Math.random();
  console.log('Random number: ', random);
  isNew = random >= 0.5 ? true: false;

  console.log('Is Great that 0.5: ', isNew);

  const myBoolean: Boolean = true;
})();
