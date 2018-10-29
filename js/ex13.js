//Proxy  代理 增强对象和函数（方法）相当于生命周期钩子函数  预处理

let obj={
    add:function(val){
        return val+100
    },
    name:'i am jspang'
}
console.log(obj.add(100))
console.log(obj.name)

let pro1=new Proxy({
    //对象体
    reduce:function(val){
        return val-100
    },
    name:'i am proxy',
    age:'18'
},{
    //预处理机制 在得到某个值之前先进行get中的事情
    get:function(target,key,property){
        console.log('come in get');
        console.log('target'+target);
        console.log(key);
        return target[key]
    }  
},{
    //在改变的时候先改变set里的值
    set:function(target,key,value,reciver){
        console.log('set');
        console.log(`seeting${key} = ${value}`);
        return target[key]=value
    }
});
console.log(pro1.name);
console.log(pro1.age);
pro1.name='技术胖';
console.log(pro1.name);

//方法的预处理
let target = function(){
    return 'i am guoli'
}
let handeler={
    apply(target,ctx,args){
        console.log('do apply')
        return Reflect.apply(...arguments)  //必须
    }
}
let pro = new Proxy(target,handeler);

console.log(pro())