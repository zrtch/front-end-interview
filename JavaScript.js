// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    // obj是 null，或者不是对象和数组，直接返回
    return obj
  }
  // 初始化返回结果
  let result
  if (obj instanceof Array) { // 判断它是不是数组
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 深拷贝对象，并将结果添加到返回结果中
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

const obj1 = {
  name: "张三",
  age: 18,
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b']
}
const obj2 = deepClone(obj1)
obj2.address.city = "shangahi"
obj2.arr[0] = "1"
console.log(obj1.address.city); // beijing
console.log(obj1.arr[0]); // a

// 变量计算
const a = 100 + 10 // 110
const b = 100 + '10' // 10010

console.log(100 == '100'); // true
console.log(0 == ''); // true
console.log(0 == false); // true
console.log(false == ''); // true
console.log(null == undefined); // true
 
if (obj.a == null) { }

console.log(!!0 === false); // true
console.log(!!NaN === false); // true
console.log(!!'' === false); // true
console.log(!!false === false); // true
console.log(!!null === false); // true
console.log(!!undefined === false); // true

console.log(10 && 20); // 20
console.log('' || 'abc'); // abc
console.log(!false); // true

// 值类型和引用类型的区别
const o1 = { x: 100, y: 200 }
const o2 = o1
let x1 = o1.x
o2.x = 101
x1 = 102
console.log(o1); // { x: 101, y: 200 }