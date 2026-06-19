// // // function add(...numbers) {
// // //   console.log(numbers);
// // // }
// // // add(12, 13, 14);
// // // ----------
// // function sum(...numbers) {
// //   let total = 0;

// //   for (let number of numbers) {
// //     total += number;
// //   }

// //   return total;
// // }

// // // console.log(sum(10, 20));
// // // console.log(sum(10, 20, 30));
// // // console.log(sum(10, 20, 30, 40));

// // function allCustomer(...allnumbers) {
// //   console.log(allnumbers);
// // }
// // allCustomer('shawon', 'rafi', 'hasan');
// // // ------------------------
// function add(...a) {
//   console.log(a);
// }
// add(12, 14, 34, 65);
// // sum of the numebr using rest parameter
// function sum(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return ('total numbers is', total);
// }
// console.log('numbers of sum is:', sum(10, 20, 30));
// // -----------product count
// function addToCart(...product) {
//   console.log(`total product is ${product.length}`);
// }
// addToCart('mouse', 'yearphone', 'laptop', 'keyboard');
// // -----calculate the avarage
// function avarage(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total = total + num;
//   }
//   return total / numbers.length;
// }
// console.log('avarage o the numbers is:', avarage(12, 13, 14));
// // --------------- calculate the total numebrs using arrow function in rest parmeters
const sum = (...numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};
console.log('sum of the numbers is:', sum(10, 20, 30, 40));
