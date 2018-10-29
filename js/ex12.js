//map数组类型
let json={
    name:'jspang',
    skill:'web'
};
console.log(json.name)
//=>
var map = new Map();
map.set(json,'iam');
console.log(map);
map.set('jspang',json);
console.log(map);
//map取值
console.log(map.get(json));
console.log(map.get('jspang'));
//delect 删除特定值
map.delete(json);
console.log(map);
//删除全部map.clear
//获取长度 size属性
console.log(map.size)
//查找 根据key值增删查
console.log(map.has('jspang'))
//