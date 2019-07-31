const userList = ['admin', 'manager', 'employe'];
const isUserPresent = function(user, listOfUsers) {
  return listOfUsers.includes(user);
};

console.log(isUserPresent('manager', userList));

/////////////////////////////////////////////////////
const userNames = getAllUserNames(userList);
console.log(userNames);

function getAllUserNames(list) {
  let result = ' ';
  for (let user of list) {
    result = result + user + ' ';
  }
  return result;
}

////////////////////////////////////////////////////SET DEFAULT VALUES
// const calculateSquare = function(width = 50, height = 100) {
//   console.log(Array.from(arguments));
//   return width * height;
// };

// const square = calculateSquare(10, 10); ///=100

// console.log(square);

// const sumAllArguments = function() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i];
//   }
//   return sum;
// };

// const sum = sumAllArguments(50, 40, 30, 20, 10);
// console.log(sum);

// function foo() {
//   function bar() {
//     console.log();
//   }
// }

/////////////////////////////////////////////////////////

let firstUserInput = prompt('Введите число 1');
let secondUserInput = prompt('Введите число 2');

function sum(nmb1, nmb2) {
  return Number(nmb1) + Number(nmb2);
}

console.log(sum(firstUserInput, secondUserInput));
