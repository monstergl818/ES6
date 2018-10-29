//对象扩展运算符 ...
//用在声明方法不确定参数个数的场景
console.log('对象扩展运算符')
function fun1(...arg){
    console.log(arg[0])
    console.log(arg[1])
    console.log(arg[2])
    console.log(arg[3])
}
fun1(1,2,3)

let arr1=['guo','li'];
console.log(arr1)
let arr2=[];
console.log(arr2)
arr2.push('nihao');
console.log(arr1)
let arr3=[...arr1];
arr3.push('arr3');
console.log(arr3);
console.log(arr1)

//rest 运算符
function fun2(frist,...arg){
    //console.log(arg.length)
    //还是占有内存空间，影响效率
    // for(let i = 0;i<arg.length;i++){
    //     console.log(arg[i])
    // }
    //for of 循环
    for(val of arg){
        console.log(val)
    }

}
fun2(0,1,2,3,4,5,6,7)
