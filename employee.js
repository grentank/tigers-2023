const Person = require('./person');

function Employee(name, salary, age) {
  Person.call(this, age, name); // Вызвал конструктор родителя
  // получил доступ к полям (свойствам) родителя
  this.salary = salary;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);
// Устанавливаю прототипное наследование, получаю доступ
// к методам родителя

Employee.prototype.raiseSalary = function (bonusSalary) {
  this.salary += bonusSalary;
};

module.exports = Employee;
