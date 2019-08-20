'use strict';

// const Hero = function(name, power, age) {
//   this.name = name;
//   this.power = power;
//   this.age = age;
//   this.incrimentAge = function() {
//     this.age = this.age + 1;
//   };
// };

// const tonyStark = new Hero('Tony', 'rich', 52);
// const hulk = new Hero('Benner', 'green power', 40);
// console.log(tonyStark);
// console.log(hulk);
///////////////////////////////////////////////////////
//cart
//methods
// addItem, removeItem, deleteAllItems;

//props
// itemList;

//class Product
//methods
// rename, changePrice;

//props
// name, price, description;

// const cart = new Cart();
// const description = new Product('tel', '500', 'nice one');
// cart.push(telephone);

const Cart = function() {
  this.itemList = [];
  this.addItem = function(item) {
    this.itemList.push(item);
  };

  this.removeItem = function() {};
  this.deleteAllItems = function() {
    this.itemList = [];
  };
};

const Product = function(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.rename = function(newName) {
    this.name = newName;
  };
  this.changePrice = function(newPrice) {
    this.price = newPrice;
  };
  this.itemList = [];
};

const cart = new Cart();
const telephone = new Product('tel', '1000', 'nice one');
cart.addItem(telephone);
telephone.rename('Iphone');
telephone.changePrice('2500');
cart.deleteAllItems();
console.log(cart);
