// XMLHttpRequest
const xhr = new XMLHttpRequest()
xhr.open("GET", './data.json', true) // true 代表异步请求
xhr.onreadystatechange = function () {
  // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
      alert(xhr.responseText)
    } else {
      console.log('其他情况 ');
    }
  }
}
xhr.send(null)