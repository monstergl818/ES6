//class 类里都是方法函数，类及类的继承
class Coder{
    name(val){//类函数的参数
        console.log(val);
        return val
    }
    skill(val){
        console.log(val);
        console.log(this.name('guoli')+val)//类里的方法引用方法
    }

    constructor(a,b){//类的参数
        this.a=a;
        this.b=b
    }

    add(){
        return this.a+this.b
    }
}

let ex15jspang= new Coder;
let ex15skill=new Coder;
ex15jspang.name('技术胖');
ex15skill.skill('前端')
let ex15constr=new Coder(1,2);//类传参
console.log(ex15constr.add())


class htmler extends Coder{//htmler 继承 Coder 

}
let ht1= new htmler;
ht1.name('果粒')