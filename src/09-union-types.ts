(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'Cristhian';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`String --> ${myText.toLowerCase()}`);
    } else {
      console.log(`Number --> ${myText.toFixed(1)}`);
    }
  }
  greeting('Cristhian');
  greeting(123456);
})();
