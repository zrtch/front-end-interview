// es-module
// 只导出一个使用 defult
import array from './b';
console.log(array);

// 导出多个使用结构赋值
import { fn, name, obj } from './a' // 解构赋值
fn()
console.log(name);
console.log(obj);

// 测试babel
const sum = (a, b) => {
  return a + b
}
const res = sum(1, 2)
console.log(res);

