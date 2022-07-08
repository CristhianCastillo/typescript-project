import _ from 'lodash';

const data = [
  {
    username: 'Cristhian',
    dole: 'Programmer'
  },
  {
    username: 'Sebastian',
    dole: 'Admin'
  },
  {
    username: 'Juan',
    dole: 'Admin'
  },
  {
    username: 'Ana',
    dole: 'QA'
  }
];

const result = _.groupBy(data, (item) => item.dole);
console.log(result);

