// class 类
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
  sayHi() {
    console.log('hi, ' + this.name + ', ' + this.number);
  }
}
const stu1 = new Student('张三', 18)
console.log(stu1.name); // 张三
stu1.sayHi() // hi, 张三, 18

const stu2 = new Student('李四', 19)
console.log(stu2.name); // 李四
stu2.sayHi() // hi, 李四, 19


// 继承
// 父类
class Person {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name}, eat something`);
  }
}

// 子类
class Student extends Person {
  constructor(name, number) {
    // 子类都必须通过super把属性传给父类
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`姓名：${this.name} , 学号：${this.number}`);
  }
}
// 子类
class Teacher extends Person {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name}教授${this.major}`);
  }
}
// 学生实例
const zhangsan = new Student('张三', 18)
zhangsan.sayHi() // 姓名：张三 , 学号：18
zhangsan.eat() // 张三, eat something
// 老师实例
const wangmei = new Teacher('王梅', '计算机')
wangmei.teach() // 王梅教授计算机
wangmei.eat() // 王梅, eat something

// 类型判断 - instanceof 
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log({} instanceof Object); // true

// class 实际上是函数，可见是语法糖
console.log(typeof Person); // function
console.log(typeof Student); // function

console.log(zhangshan.__proto__); // __proto__ 为隐式原型
console.log(Student.prototype); // prototype为显示原型
console.log(zhangsan.__proto__ === Student.prototype); // true

console.log(Student.prototype.__proto__);
console.log(Person.prototype);
console.log(Person.prototype === Student.prototype.__proto__); // true