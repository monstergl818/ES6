//promise 解决es5回调地域的问题

let state=1;

function step1(resolve,reject){
    console.log('1.开始洗菜做饭')
    if(state==1){
        resolve('洗菜做饭完成')
    }else{
        reject('洗菜做饭出错')
    }
}

function step2(resolve,reject){
    console.log('2.开始坐下来吃饭')
    if(state==1){
        resolve('坐下来吃饭完成')
    }else{
        reject('坐下来吃饭出错')
    }
}

function step3(resolve,reject){
    console.log('2.开始收拾桌子')
    if(state==1){
        resolve('收拾桌子完成')
    }else{
        reject('收拾桌子出错')
    }
}

new Promise(step1).
then(function(val){//绑定处理程序
    console.log(val);
    return new Promise(step2);
}).
then(function(val){//绑定处理程序
    console.log(val);
    return new Promise(step3);
}).
then(function(val){
    console.log(val); 
})