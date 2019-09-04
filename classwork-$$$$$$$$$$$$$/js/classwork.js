'use strict';

// function fact(value) {
//   if (value === 2) return 2;

//   return value * fact(value - 1);
// }

// alert(fact(5));

const foo = [1, 2, 3, 4, 5];

function fact(arr, index = 0) {
  if (arr.length === index) return;

  console.log(arr[index]);
  index++;
  fact(arr, index);
}

fact(foo);
