// 获取查询参数，并格式化为js对象
const url = "www.qq.com?name=zhangsan&age=18&id=000"
const params = new URLSearchParams(url.split('?')[1])
const obj = Object.fromEntries(params.entries())
console.log(obj);

