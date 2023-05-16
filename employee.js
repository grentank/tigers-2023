// class Employee {
//   constructor(options) {
//     this.name = options.name ?? 'Jane Doe';
//     this.age = options.age || 18;
//     this.salary = options.salary;
//     this.technologies = [];
//   }

const uuid = require('uuid');
const Person = require('./person');

//   addTech(newTech) {
//     this.technologies.push(newTech);
//   }
// }

class Employee extends Person {
  static corp = 'Elbrus';

  #salary;

  #id;

  constructor({ name = 'Jane Doe', age = 18, salary }) {
    super({ name, age });
    this.#salary = salary;
    this.#id = uuid.v4();
    this.technologies = [];
  }

  get salary() {
    console.log('WARNING! TRYING TO GET SALARY PROPERTY');
    return this.#salary;
  }

  set salary(newSalary) {
    if (typeof newSalary !== 'number') return console.log('Error! Salary must be a number!');
    if (newSalary > 10000) return console.log('Error! Salary is to high!');
    if (Math.abs(newSalary - this.#salary) >= 500)
      return console.log('Error! Salary difference is to high!');
    this.#salary = newSalary;
  }

  addTech(newTech) {
    console.log('Added new technology to employee with id: ', this.#id);
    this.technologies.push(newTech);
  }

  greeting() {
    super.greeting();
    console.log('I am an employee');
  }
}

// const alex = new Employee({
//   salary: 1000,
//   name: 'Alex',
// });
// // const bob = new Employee();

// // console.log(alex);
// alex.greeting();

module.exports = Employee;
