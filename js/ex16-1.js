 //模块化操作
 export var name="jspang";//输出，export可以有多个

 var skill="web";
 var a="北大"

 export{name,a,skill}; //多变量输出
 
 export function add(a,b){ //方法模块化输出
     console.log(a+b)
 }

 export{
     name as a  //语义化名称
 }

 export default { //export default 在一个文件中只能有一个
     var a = 'jspang'
 }

