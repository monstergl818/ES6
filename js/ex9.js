//ES6中的对象
//对象赋值
let ex9name='jspang';
let ex9skill='web';
let ex9obj={ex9name,ex9skill} //允许用变量赋值
console.log(ex8obj)
//key值的构建
let key="skill";
var ex9obj1={
    [key]:'web'
}
console.log(ex9obj1)// {skill：'web'}
//自定义对象方法
let ex9obj2={
    add:function(a,b){
        return a+b
    }
}
console.log(ex9obj2.add(1,2))
//is() 两个对象的比较 ===同值相等  is()严格相等
let ex9obj3={name:'jspang'};
let ex9obj4={name:'jspang'};
console.log(ex9obj3.name==ex9obj4.name);//ES5写法
console.log(Object.is(ex9obj3.name,ex9obj4.name));//Es6写法
//assign 合并对象 
let ex9obj5={ex9obj5:'jspang'};
let ex9obj6={ex9obj6:'hello'};
let ex9obj7={ex9obj7:'world'};
let  d=Object.assign(ex9obj5,ex9obj6,ex9obj7);
console.log(d)