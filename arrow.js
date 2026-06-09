// arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

const squire = num => {
  return num * num;
};
console.log(squire(4));
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 5));

// 5 tasks
const greet = name => {
  return 'hello ' + name;
};
console.log(greet('shawon'));
const addTwo = (a, b) => {
  return a + b;
};
console.log(addTwo(2, 6));
//  cube return
const cube = num => {
  return num ** 3;
};
console.log(cube(3));
//  task4
const task = name => {
  return 'welcome ' + name;
};
console.log(task('rafi'));
// task5
const task5 = () => {
  const products = [
    { name: 'Phone', price: 500 },
    { name: 'Mouse', price: 50 },
  ];

  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
  }
};

task5();
