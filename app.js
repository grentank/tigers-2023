// console.log(null || false || undefined);

const Employee = require('./employee');

// const Student = require('./student');

// // const names = ['Alex', 'Bob', 'Charlie', 'Dave', 'Erin', 'Frank', 'Gary', 'Hank', 'Ivan'];

// // // if(names.isArray())

// // console.log(Array.isArray(names))

// const newGroup = Student.generateStudents(5);
// console.log(newGroup);

const alex = new Employee({
  name: 'Alex',
  age: 23,
  salary: 1000,
});

console.log(alex.salary);

alex.salary = 1100;
console.log(alex.salary);
