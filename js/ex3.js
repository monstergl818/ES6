//字符串模板`` 支持空格 可以在内部加html标签，使用${}加入变量
let jspang='技术胖'
let blog=`非常高兴你能看到这篇文章，我是${jspang},这节课我们学习字符串模板`
console.log(blog)
//查找a字符串是否在b字符串中
let stra='你好，我是monstergl';
let strb='monster';
let strc='你好';
console.log(stra.includes(strb))
//查找stra是否存在strc
console.log(stra.startsWith(strc))
//查找尾部是否存在
console.log(stra.endsWith(strc))
//字符串复制
console.log(strc.repeat(10))