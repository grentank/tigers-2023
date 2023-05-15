// const student = {
//   name: 'John',
//   age: 20,
// };

const Employee = require('./employee');
const Person = require('./person');
const Student = require('./student');

// const objForKey = {
//   a: 3,
// };

// student.skills = ['JS', 'HTML', 'CSS'];

// student[Symbol('my string')] = 'testing symbol property';

// student[100] = 'testing number property';

// console.log(student);

// for (let i = 0; i < Object.keys(student).length; i += 1) {
//   console.log(Object.keys(student)[i]);
// }

// for (const key in student) {
//   console.log(key);
// }

// for (const key in student) {
//   if (student.hasOwnProperty(key)) {
//     const element = student[key];
//     console.log(key);
//   }
// }

// const names = ['John', 'Jane', 'Jack'];

// names.totalAge = 50;

// console.log(names[3]);

// function showFullName(surname, patronymic) {
//   console.log(`${surname} ${this.name} ${patronymic}`);
// }

// const igor = { name: 'Игорь', showFullName };
// const vitya = { name: 'Витя' };

// showFullName.call(igor, ['Иванов', 'Сергеевич']);
// ... - rest/spread operator
// igor.showFullName.call(vitya, 'Иванов', 'Сержеевна');

// const alexStudent = new Student('Alex', 20, 2);
// const bobEmployee = new Employee('Bob', 2000, 30);
// const charliePerson = new Person(50, 'Charlie');

// const people = [alexStudent, bobEmployee, charliePerson];

// console.log(people.join('\n'));

function prettyString() {
  return this.map((part) => `${part.name}: ${part.weight} kg`).join('; ');
}

function Motorbike(parts) {
  this.parts = parts;
  this.parts.toString = prettyString;
}

const customBike = new Motorbike([
  { name: 'front wheel', weight: 4 },
  { name: 'rear wheel', weight: 5 },
  { name: 'seat', weight: 1 },
]);

console.log(`${customBike.parts}`);
