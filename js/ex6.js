//fill 数组的实例方法
let ex6arr=['guoli','monster','gl']
ex6arr.fill('web',1,2) //替换数组中的元素
console.log(ex6arr)
//数组循环 for of arr.keys()数组下标 实例方法.entries()有索引有值
console.log("for of 数组循环")
for(let [index,val] of ex6arr.entries()){
   // console.log(index+':'+val)
    console.log("循环出数组的值"+val)
}
//需要手动循环
let ex6list = ex6arr.entries()
console.log(ex6list.next().value)
console.log('-------------------------')
console.log(ex6list.next().value)
console.log('**********************')
console.log(ex6list.next().value)
console.log('66666666666666666666666')