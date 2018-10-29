//数组解构
let [a,b,c] = [5,20,8]
console.log('数组解构')
console.log(a)
console.log(b)
console.log(c)
//数组解构赋值
let [foo = true] = []
console.log('数据结构赋值')
console.log(foo)
let [name1,name2='monster']=['guoli','郭莉']
//let [name1,name2='monster']=['guoli'] //name2解构默认值为赋值
console.log(name1)
console.log(name2)
//对象解构赋值
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let {name,sex}={sex:'女',name:'monster'}
console.log('对象解构')
console.log(name)
console.log(sex)
//解构已经定义的变量
let x;
({x}={x:'张三'}) //解构已经定义的变量需要用（）包起来
console.log('解构已经定义的变量')
console.log(x)
//字符串解构
let [s1,s2,s3,s4,s5]='Hello';
console.log('字符串解构')
console.log(s1);
console.log(s2); 
console.log(s3); 
console.log(s4); 
console.log(s5); 
