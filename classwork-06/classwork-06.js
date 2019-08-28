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
    id: 0,
    name: 'Mi',
    price: 300,
    inStock: true,
    imgUrl:
      'https://www.91-img.com/pictures/133713-v2-vivo-y17-mobile-phone-large-1.jpg',
  },
  {
    id: 1,
    name: 'Sony',
    price: 350,
    inStock: true,
    imgUrl:
      'https://www.91-img.com/pictures/134236-v3-vivo-z5x-mobile-phone-large-1.jpg',
  },
  {
    id: 2,
    name: 'Iphone',
    price: 1000,
    inStock: true,
    imgUrl:
      'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-xr/blue/Apple-iPhoneXr-Blue-1-3x.jpg',
  },
  {
    id: 3,
    name: 'Jio',
    price: 35,
    inStock: false,
    imgUrl: 'https://n1.sdlcdn.com/imgs/g/z/o/1-637b9.jpg',
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

// cart.setInStockById(8);
// cart.showInfo();
// cart.log();

const cartItem = item => {
  return `<li class="cart__item">
  <figure class="cart__figure">
      <img onclick="alert(fuck)" src="${item.imgUrl}" alt="" class="cart__img">
  </figure>
  <div class="cart__details">
      <h2 class="cart__title">${item.name}</h2>
      <span class="cart__price">Price: ${item.price}$</span>
      <button class="btn">Delete</button>
  </div>
</li>`;
};

const cartList = document.querySelector('.cart__list');
const randerList = () => {
  cartList.innerHTML = cart.productList
    .map(item => cartItem(item))
    .reduce((acc, item) => acc + item, '');
};

randerList();

// cartList.innerHTML = cart.productList
//   .map(item => cartItem(item))
//   .reduce((acc, item) => acc + item, '');

// console
//   .log
//   productList.map(item => cartItem(item)).reduce((acc, item) => acc + item, ''),
//   ();

const btnList = document.querySelectorAll('.btn');

Array.from(btnList).forEach((btn, index) => {
  btn.addEventListener('click', () => {
    cart.removeById(index);
    randerList();
    console.log(cart.productList);
  });
});
