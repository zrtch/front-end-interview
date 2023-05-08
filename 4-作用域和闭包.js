// 作用域
let a = 0;
function fn1() {
  let a1 = 100
  function fn2() {
    let a2 = 200
    function fn3() {
      let a3 = 300
      return a + a1 + a2 + a3
    }
    fn3()
  }
  fn2()
}
fn1()

if (true) {
  let x = 100
}
console.log(x);

// 函数作为返回值
function create() {
  const a = 100
  return function () {
    // 向上级作用域进行寻找
    console.log(a);
  }
}

const fn = create()
const a = 200
fn() // 100

// 函数作为参数
function print(fn) {
  const b = 200
  fn()
}
const b = 100
function fn() {
  console.log(b);
}
print(fn) // 100

// this
function fn1() {
  console.log(this);
}
fn1() // window

// call 直接调用就执行了
fn1.call({ x: 100 }) // { x: 100 }

// bind是返回一个新的函数，重新这个函数
const f2 = fn1.bind({ x: 200 })
f2() // { x: 200 }

const zhangsan = {
  name: "zhangssan",
  sayHi() {
    // this 即当前对象
    console.log(this);
  },
  waitAgain() {
    setTimeout(() => {
      // this 即当前对象
      console.log(this);
    })
  }
}
zhangsan.sayHi()
zhangsan.waitAgain()

// function fn1(a, b, c) {
//   console.log('this', this);
//   console.log(a, b, c);
//   return 'this is fn1'
// }
// const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
// const res = fn2()
// console.log(res); // this { x: 100 } ; 10 20 30 ; this is fn1

// 模拟bind
Function.prototype.bind1 = function () {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)

  // 获取 this （数组第一项）
  const t = args.shift()

  // fn1.bind(...) 中的 fn1
  const self = this

  // 返回一个函数
  return function () {
    return self.apply(t, args)
  }
}

function fn1(a, b, c) {
  console.log('this', this);
  console.log(a, b, c);
  return 'this is fn1'
}
const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res); // this { x: 100 } ; 10 20 30 ; this is fn1

// 闭包隐藏数据，只提供API
function createCatche() {
  const data = {} //闭包中的数据，被隐藏，不被外界访问
  return {
    set: function (key, val) {
      data[key] = val
    },
    get: function (key) {
      return data[key]
    }
  }
}

const c = createCatche()
c.set('a', '100')
console.log(c.get('a'));