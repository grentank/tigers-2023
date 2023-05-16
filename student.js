// function Student(name, age, phase = 0) {
//   this.name = name;
//   this.age = age;
//   this.phase = phase;
//   this.bootcamp = 'Elbrus';
// }

const Person = require('./person');

// Student.prototype.passExam = function () {
//   if (this.phase < 3) this.phase += 1;
// };

class Student extends Person {
  constructor(name, age, phase = 0) {
    super({ name, age });
    this.phase = phase;
    this.bootcamp = 'Elbrus';
  }

  passExam() {
    if (this.phase < 3) this.phase += 1;
  }

  static getClassName() {
    return 'Student';
  }

  static generateStudents(amount) {
    const students = [
      new Student('Alex', 25, 0),
      new Student('Vasya', 22, 0),
      new Student('Petya', 23, 3),
      new Student('Kolya', 21, 1),
      new Student('Sasha', 24, 2),
      new Student('Vanya', 20, 1),
      new Student('Katya', 19, 3),
      new Student('Vova', 18, 2),
      new Student('Sveta', 17, 1),
      new Student('Kolya', 16, 3),
    ];
    return students.slice(0, amount);
  }
}

// const thirdPhaseStudent = new Student(,);
// console.log(thirdPhaseStudent)

module.exports = Student;

// const alex = new Student();
// alex.passExam();
// console.log(alex);
