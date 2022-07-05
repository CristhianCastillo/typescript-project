(() => {
  let myNumber: number;
  let myString: string;
  let myNull = null; // type is 'any'
  let myUndefined = undefined; // type is 'any';

  let anotherExample: null = null;
  let another: undefined = undefined;

  let myNumberTwo: number | null = null;
  let myName: string | undefined = undefined;
  myName = 'Cristhian Castillo';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('Cristhian');
  hi(null);

  hiV2('Cristhian');
  hiV2(null);
})();
