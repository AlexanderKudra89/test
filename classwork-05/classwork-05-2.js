'use strict';

// const dog = { bark: 'Bow wow' };
// const bigDog = Object.create(dog);

// bigDog.name = 'Chaky';

// for (let key in bigDog) {
//   if (!bigDog.hasOwnProperty(key)) continue;

//   console.log(key);
// }

// console.log(bigDog, 'bigDog');

//////////////////////////////////////////////////////

const User = function(name, age) {
  this.name = name;
  this.age = age;
  this.great = function() {
    console.log(`My name is ${this.name}`);
  };
};

User.prototype.say = function() {
  console.log(`Hello, my age is ${this.age}`);
};

const admin = new User('Ben', 25);
// admin.say();
// console.log(User.prototype, 'prototype');
// console.log(admin, 'admin');

const SuperAdmin = function(name, age, levelOfComtrol = 2) {
  User.call(this, name, age);

  this.levelOfComtrol = levelOfComtrol;
};

SuperAdmin.prototype = Object.create(User.prototype);
SuperAdmin.prototype.constructor = SuperAdmin;

const billy = new SuperAdmin('Billy', 40, 10);
// billy.say();
// console.log(billy);
//////////////////////////////////////////////////////////////////////////Клас

class Hero {
  constructor(name, color, power) {
    this.name = name;
    this.color = color;
    this._power = power;
  }

  great() {
    console.log(`My, name is ${this.name}`);
  }

  get power() {
    return this._power;
  }

  set power(powerType) {
    this._power = `${powerType} is amazing`;
  }
}

const hulk = new Hero('Hulk', 'green', 'strenght');
console.log(hulk.power);
hulk.power = 'huge';
console.log(hulk.power);
hulk.great();
/////////////////////////////////////////////////////////////////////////////////////////

class AntiHero extends Hero {
  constructor() {
    super();
  }
}
