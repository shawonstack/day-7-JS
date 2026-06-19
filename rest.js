// // function add(...numbers) {
// //   console.log(numbers);
// // }
// // add(12, 13, 14);
// // ----------
// function sum(...numbers) {
//   let total = 0;

//   for (let number of numbers) {
//     total += number;
//   }

//   return total;
// }

// // console.log(sum(10, 20));
// // console.log(sum(10, 20, 30));
// // console.log(sum(10, 20, 30, 40));

// function allCustomer(...allnumbers) {
//   console.log(allnumbers);
// }
// allCustomer('shawon', 'rafi', 'hasan');
// // ------------------------
function add(...a) {
  console.log(a);
}
add(12, 14, 34, 65);
// sum of the numebr using rest parameter
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return ('total numbers is', total);
}
console.log('numbers of sum is:', sum(10, 20, 30));
// -----------product count
