(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = 'Esto es una variable String';
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = true;

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1234;
  const numberVar = (<number>myDynamicVar).toFixed();
  console.log(numberVar);

})();
