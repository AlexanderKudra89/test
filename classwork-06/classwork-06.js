'use strict';

// const users = [
//   'Ben',
//   'Alex',
//   'Fifi',
//   'Anton',
//   'Rafaello',
//   'Donatello',
//   'Tomat',
// ];

// users.forEach((item, index, array) => console.log(item, index, array));

// users.forEach((item, index, array)) {
//     array[index] = {name: item};
// }

// console.log(users);

// const bar = function(a, b, fn) {
//   return fn(a, b);
// };

// console.log(
//   bar(2, 5, function(a, b) {
//     return a + b;
//   }),
// );

const productList = [
  {
    id: 1,
    name: 'Telephone',
    price: 55,
    inStock: true,
  },
  {
    id: 2,
    name: 'TV',
    price: 55000,
    inStock: true,
  },
  {
    id: 3,
    name: 'Mouse',
    price: 60,
    inStock: true,
  },
  {
    id: 4,
    name: 'Notebook',
    price: 10000,
    inStock: false,
  },
];

const cart = {
  productList,
  getTotalPrice() {
    return this.productList.reduce((acc, product) => acc + product.price, 0);
  },
  add(product) {
    this.productList.push(product);
  },
  removeById(id) {
    this.productList = this.productList.filter(product => product.id !== id);
  },
  showInfo() {
    this.productList.forEach(product =>
      console.log(`Product name: ${product.name} and price ${product.price}`),
    );
  },
  isAllProductInStock() {
    const res = this.productList.every(product => product.inStock);
    if (!res) console.log('Some product is out of stock');

    return res;
  },
  setInStockById(id) {
    const searchedProduct = this.productList.find(product => product.id === id);
    searchedProduct
      ? (searchedProduct.inStock = true)
      : console.log('Product was not found');
  },
  log() {
    console.log(this.productList);
  },
};

cart.setInStockById(8);
cart.showInfo();
cart.log();
