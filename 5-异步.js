// 同步
console.log(100);
alert(200) // 这里就会阻塞代码执行
console.log(300);

// 异步 (callback 回调函数)， 在回调函数中先执行同步任务，再执行异步任务
console.log(100); // 1
setTimeout(() => {
  console.log(200); // 3
}, 1000);
console.log(300); // 2


// ajax 
console.log('start');
$.get('./data.json', function (data1) {
  console.log(data1);
})
console.log('end');

// 图片加载
console.log('start');
let img = document.createElement('img')
img.onload = function () { // onload 就是 callback 形式
  console.log('loaded');
}
img.src = '/xxx.png'
console.log('end');

console.log(100);
setInterval(() => {
  console.log('loop');
}, 1000)
console.log(200);


// settimeout 笔试题
console.log(1); // 1
setTimeout(function () {
  console.log(2); // 5
}, 1000)
console.log(3); // 2
setTimeout(function () {
  console.log(4); // 4 
}, 0)
console.log(5); // 3

