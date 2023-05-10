// 获取查询参数，并格式化为js对象
const url = "www.qq.com?name=zhangsan&age=18&id=000"
// 使用了 URLSearchParams 对象来解析查询参数，url.split('?')[1]，将 URL 字符串分割成两部分，获取问号后面的查询参数部分
const params = new URLSearchParams(url.split('?')[1])
// 使用 entries() 方法获取一个迭代器，遍历每个查询参数的键值对
// 最后，通过 Object.fromEntries() 方法将键值对数组转换为 JavaScript 对象
const obj = Object.fromEntries(params.entries())
console.log(obj);

