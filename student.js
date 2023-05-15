const Person = require('./person');

function Student(name, age, phase) {
  Person.call(this, age, name);
  this.phase = phase;
  this.bootcamp = 'Elbrus Bootcamp';
  this.skills = [];
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.addSkill = function (newSkill) {
  this.skills.push(newSkill);
};

Student.prototype.toString = function () {
  return `This is a student. Name: ${this.name}`;
};

module.exports = Student;

// const alexStudent = new Student('Alex', 20, 1);
// const alexStudent2 = new Student('Alex', 20, 1);
// console.log(alexStudent.addSkill === alexStudent2.addSkill);
// alexStudent.addSkill('HTML');
// console.log(alexStudent);
