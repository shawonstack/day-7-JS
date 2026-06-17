// const user1 = {
//   name: 'Rafi',

//   sayName: function () {
//     return this.name;
//   },
// };
// console.log(user1.sayName());
const user = {
  name: 'Rafi',

  show: () => {
    console.log(this.name);
  },
};

user.show();
