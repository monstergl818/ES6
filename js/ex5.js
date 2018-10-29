//ES6新增的数组知识 数组方法都在Array下
//json数组格式
let ex5json = {
    '0':'guoli',
    '1':'monster',
    '2':'果粒',
    length:3
}
//json数组转换为数组  数组方法都在Array下
let ex5arr = Array.from(ex5json) 
console.log("Array.from（）json数组转换为数组")
console.log(ex5arr)
//Array.of方法 字符串转换为数组
console.log("Array.of()字符串转换为数组") 
let ex5arr2 = Array.of(3,4,5,6);
let ex5arr3 = Array.of('hello","world","guoli');
console.log(ex5arr2)
console.log(ex5arr3)
//find(function(value,index,arr){}) 实例方法 在数组中进行查找
//value:当前要查找的值，index：值的索引，arr:原型
let ex5arr4=[1,2,5,3,4,6,7,8,9]
console.log(ex5arr4.find(function(value,index,arr){
    // return value>5  
    //return index>5 
    return arr[0] 
}))