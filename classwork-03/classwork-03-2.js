'use strict';

// const hero = {
//   name: 'Viktor Pavlik',
//   sing() {
//     console.log(`Town of green light by ${this.name}`);
//   },
// };

// // hero.sing();

// const hero1 = {
//   name: 'Dodo',
//   sing: hero.sing,
// };

// hero1.sing();

// const getFullName = function(message) {
//   console.log(`${message} ${this.name} ${this.lastName}`);
// };

// const user = {
//   name: 'John',
//   lastName: 'Travolta',
// };

// // getFullName('Hi is');
// getFullName.call(user, 'He is');

// const arr = [1, 2, 5, 8, 11, 20];
// const maxVal = Math.max(...arr);
// console.log(maxVal);

const getDetails = function(description) {
  return `${description} ${this.name}`;
};

const company = {
  name: 'Bosch',
};

const getCompanyDetails = getDetails.bind(company, 'Our company is: ');

console.log(getCompanyDetails());
/////////////////////////////////////////////////////////////////////////////

const store = {
  name: 'VidaXl',
  description: 'Nice store',
};

const showStoreName = function() {
  console.log(this.name);
};

store.showStoreName = showStoreName;

store.showStoreName();
