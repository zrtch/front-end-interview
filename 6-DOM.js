// 获取 DOM 节点
const div1 = document.getElementById('div') // 元素
const divlist = document.getElementsByTagName("div") // 通过标签的name获取集合
const containerList = document.getElementsByClassName("container") // 通过class的name获取集合
const pList = document.querySelectorAll('p') // 获取所有的p元素

// DOM 节点的 property
const plist = document.querySelectorAll('p')
const p = plist[0]
console.log(p.style.width); // 获取样式
p.style.width = '100px' // 修改样式
console.log(p.className); //获取 class
p.className = 'p1'  // 修改 class
console.log(p.nodeName); // 获取标签节点名称
console.log(p.nodeType); // 标签类型

// DOM 节点的 attribute
const list = document.querySelectorAll('p')
const p1 = list[0]
p1.setAttribute('data-name', 'p1') // 设置值
console.log(p1.getAttribute('data-name')); // 获取值

// 新增/插入节点
const div = document.createElement('div')
const div2 = document.createElement('div2')


// 新建节点
const newP = document.createElement('p')
newP.innerHTML = 'this is p'
// 插入节点
div.appendChild(newP)

// 移动节点
const p2 = document.getElementById('p2')
div2.appendChild(p2)

// 获取父元素
console.Log(p1.parentNode)

// 获取子元素
const div2ChildNodes = div2.childNodes
const div2ChildNodesP = Array.prototype.slice.call(div2.childNodes).filter(node => node.nodeType === 1)

// 删除子元素
const div3 = document.getElementById('div')
const child = div3.childNodes
div3.removeChild(child[0])

// 将频繁操作改为一次性操作
const listNode = document.getElementById("list")

// 创建一个文档片段，此时还没有插入到 DOMN树中
const frag = document.createDocumentFragment()
// 执行插入
for (let x = 0; x < 10; x++) {
  const li = document.createElement('li')
  li.innerHTML = 'list itme ' + x
  frag.appendChild(li)
}
// 都完成之后，再统一插入到 DOM 树中
listNode.appendChild(frag)