function addNumbers(a, b, c) {
  return a + b + c;
}
let numbers = [12, 13, 14];
console.log(addNumbers(...numbers));
// --------------
let another = [1, ...numbers, 3, 5];
console.log(another);
