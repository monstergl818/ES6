//对象的函数解构
let ex8json={
    a:'jspang',
    b:'技术胖'
}
function ex8fun(){

}
var ex8fun=({a,b})=>{ //{} 函数解构传递json对象
    console.log(a,b)
}
ex8fun(1,2)

ex8fun(ex8json)

//函数的数组解构
let ex8arr=['jspang','技术胖','前端教程']
function ex8fun1(a,b,c){
    console.log(a,b,c)
}
ex8fun1(...ex8arr) //函数的数组解构

//in 的用法
let ex8obj={
    a:'技术胖',
    b:'jspang'
}
console.log('c' in ex8obj)
//in 数组判断空位
let ex8arr1=[5,,,,,]
console.log( 0 in ex8arr1)
console.log( 1 in ex8arr1)
//遍历数组的方法 
let ex8arr2=[5,2,8,1,3,8,35]
//for in
console.log('for in 循环')
for( let [index,val] in ex8arr2.entries()){
    console.log(index,val)
}
//forEach
ex8arr2.forEach((val,index)=>{
    console.log(index,val)
})
ex8arr2.filter(x=>console.log(x)) //输出数组元素
ex8arr2.some(x=>console.log(x))//输出数组元素
console.log(ex8arr2.map(x=>'web'))//替换
//数组怎么转换为字符串
console.log(ex8arr2.toString())
//
console.log(ex8arr2.join('-'))//分割数组的形式
