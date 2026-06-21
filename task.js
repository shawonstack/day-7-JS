// // task1---------------
// const frontend = ['HTML', 'CSS'];
// const backend = ['Node', 'MongoDB'];
// const companyTeam = [...frontend, ...backend];
// console.log('task 1:', companyTeam);

// // task2---------------------
// const fruits = ['apple', 'banana'];
// const addFruits = [...fruits, 'orrange'];
// console.log('task 2:', [...addFruits]);
// // task 3----------------
// const user = {
//   name: 'Shawon',
//   age: 23,
// };
// const updateUser = {
//   ...user,
//   age: 25,
// };
// console.log('task3 3:', updateUser);
// // task 4---------------------------
// const numbers = [15, 60, 30, 100, 40];
// console.log('task 4:', Math.max(...numbers));
// // task 5-----------------------
// const employee = {
//   name: 'Shawon',
//   age: 23,
//   country: 'Bangladesh',
// };
// const newEmployee = {
//   ...employee,
//   name: 'Shawon',
//   age: 24,
//   country: 'Bangladesh',
//   profession: 'Developer',
// };
// console.log('task5 :', newEmployee);

// 15 task  of 1
function add(a, b) {
  return a + b;
}
console.log(add(12, 13));
const add1 = (a, b) => {
  return a + b;
};
console.log(add1(22, 3));
// task15 of 2
const squire = (a, b) => a * b;
console.log(squire(2, 5));
// task 15 of 3
function restAdd(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum;
}
console.log(restAdd(12, 13, 14));
