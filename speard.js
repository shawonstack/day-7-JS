function addNumbers(a, b, c) {
  return a + b + c;
}
let numbers = [12, 13, 14];
console.log(addNumbers(...numbers));
// --------------
let another = [1, ...numbers, 3, 5];
console.log(another);
// ------------ concat insted of speard
let number1 = [1, 2, 3];
let number2 = [4, 5, 6];
let fnalnumber = [...number1, ...number2];
console.log(fnalnumber);
// array coppy uisng speard operator
let array = ['mango', 'apple', 'banana'];
let copy = [...array];
console.log(copy);
// ------------ puash something----------------
let fruit = ['lichy', 'banana', 'apple', 'orrange'];
let newFruit = [...fruit];
newFruit.push('amloki');
console.log(newFruit);
// --------------
const products = ['Laptop', 'Mouse'];

const newProducts = [...products];

newProducts.push('Keyboard');
console.log(newProducts);
// ----------
const frontEndTeam = ['tareq', 'hasan'];
const backEndTeam = ['shawon', 'meraj'];
const companyTeam = [...frontEndTeam, ...backEndTeam];
console.log(companyTeam);
// -------------
function add(a, b, c) {
  return a + b + c;
}

const nums = [5, 10, 20];

console.log(add(...nums));
// max number findout suing speard
const numberArray = [12, 23, 45, 65, 99];
console.log(Math.max(...numberArray));
// object merge
const basicInfo = {
  name: 'Shawon',
};

const extraInfo = {
  age: 23,
  country: 'Bangladesh',
};

const user = {
  ...basicInfo,
  ...extraInfo,
};

console.log(user);
