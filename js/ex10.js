//Symbol在对象中的作用  Symbol是es6中新增的数据类型 全局原始数据
let ex10a=new String;
let ex10b=new Number;
let ex10c=new Boolean;
let ex10d=new Array;
let ex10e=new Object;

let ex10f=Symbol();
console.log('Symbol是es6中新增的数据类型');
console.log(typeof(f))

let ex10=Symbol('技术胖');
console.log(ex10);
console.log(ex10.toString());
//symbol 在对象中的应用 对象引用的保护作用
let ex10jspang=Symbol();
let ex10obj={
    [ex10jspang]:'技术胖'
}
console.log(ex10obj[ex10jspang]);
ex10obj[ex10jspang]='web';
console.log(ex10obj[ex10jspang]);
//对象引用的保护作用
let ex10obj1={naem:'jspang',skill:'web'};
let age=Symbol();
ex10obj1[age]=19;
console.log('对象引用的保护作用'+ex10obj1);
//循环输出
for(let item in ex10obj1){
    console.log(ex10obj1[item])
}
console.log(ex10obj1[age])