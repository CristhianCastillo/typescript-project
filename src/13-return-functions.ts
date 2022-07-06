(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });

    return total;
  }

  const printTotal = (prices: number[]): void => {
    const result = calcTotal(prices);
    console.log(`El total es ${result}`);
  }

  const result = calcTotal([1,2,3,4,5,6,7]);
  console.log(result);
  printTotal([1,2,3,4,5]);
})();
