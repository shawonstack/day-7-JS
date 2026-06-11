const add = (a, b) => a + b;
// console.log(add(2, 4));
// --------------
const isAdult = age => age >= 18;
// console.log(isAdult(66));
// const numbers = [1, 2, 3, 4, 5];
// --------------
// const result = numbers.filter(num => num > 3);

// console.log(result);
// --------------
const squire = a => a * a;
// console.log(squire(6));
// --------------
const string = a => a + 'rafi';
// console.log(string('Hello '));
// -----------
const greet = name => `Hello ${name}`;
// console.log(greet('Rafi'));
// --------------object return
const object = () => ({
  name: 'Rafi',
  age: 20,
});
// console.log(object());
// ---------------
const numbers = [1, 2, 3, 4, 5];
const newArrayDouble = numbers.map(num => num * 2);
console.log(newArrayDouble);
