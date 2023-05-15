function Person(age, name) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

module.exports = Person;
