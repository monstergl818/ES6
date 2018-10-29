//es5写法
function add(a,b=1){
    return a+b
}
console.log(add(1,4))
//箭头函数
var ex7add1=(a,b=1)=>a+b;
console.log(ex7add1(1))
var ex7add2=(a,b=1)=>{
    console.log("写方法体需要return")
    return a+b;
}
console.log(ex7add2(1))

var ex7reduce=(a,b)=>{
    return a-b
}
console.log('箭头函数'+ex7reduce(8654654,222247968))
