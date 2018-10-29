//Set和WeakSet数据结构
//Set里放的数组 不允许重复，自动去重
let setArr1=new Set(['jspang','技术胖','web']);
setArr1.add('hello');//增加一个值
console.log(setArr1);
//has 查找值返回true false
console.log(setArr1.has('web'))
//删除
setArr1.delete('web');//删除某项
console.log(setArr1);
setArr1.clear();//全部删除
console.log(setArr1);
//循环输出
let setArr2=new Set(['jspang','技术胖','web']);
//for--of
for(let item of setArr2){
    console.log(item)
}
//for--each
setArr2.forEach((vallue)=>console.log(vallue))
//size
console.log(setArr2.size);
//WeakSet存放对象 完全相同的对象不允许
let weakObj=new WeakSet();
let ex11obj={a:'jspag',b:'hello'};
let ex11obj2={c:'guoli',d:'果粒'};
weakObj.add(ex11obj);//必须通过add添加一个声明好的对象
weakObj.add({c:'guoli',d:'果粒'})
console.log(weakObj)
 