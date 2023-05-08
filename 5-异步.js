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

// promise
function loadImg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => { // 成功调用这个
      resolve(img)
    }
    img.onerror = () => { // 失败调用这个
      const err = new Error(`图片加载失败 ${src}`)
      reject(err)
    }
    img.src = src
  })
}

const url1 = "https://raw.githubusercontent.com/zrtch/blog-img/master/1671608929746-768ee35f-e8ce-4682-9c69-7f4fdb73c7aa.jpeg"

const url2 = "https://raw.githubusercontent.com/zrtch/blog-img/master/1670221028524-da7c8e31-7819-4c26-9afa-1a97b000d9ee.png"

loadImg(url1).then(img => {
  console.log(img.width); // 1843
  return img // 普通对象
}).then(img => {
  console.log(img.height); // 1785
  return loadImg(url2) // promise 实例
}).then(img2 => {
  console.log(img2.width); // 1278
  return img2
}).then(img2 => {
  console.log(img2.height); // 660
}).catch(ex => {
  console.log(ex);
})