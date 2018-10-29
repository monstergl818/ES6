//ES6数字操作
//二进制声明 Binary
let binary = 0B010101;
console.log(binary)
//八进制声明 Octal
let octal = 0o666
console.log(octal)

//数字判断 Number
//Number.isFinite是否是数字类型
let ex4a=11/4;
console.log("Number.isFinite判断是否为数字类型"+Number.isFinite(ex4a)) 
console.log(Number.isFinite('HELLO'));
console.log(Number.isFinite(NaN))
console.log(Number.isFinite(undefined))
console.log(Number.isFinite(4212/885))
//NaN判断
console.log(Number.isNaN(NaN))
console.log(Number.isNaN(1))
//判断是否为整型
console.log('Number.isInteger判断是否为整数'+Number.isInteger(ex4a))
//判断是否为浮点型
console.log('!Number.isInteger判断是否为整数'+!Number.isInteger(ex4a))
//转换为整型
console.log('Number.parseInt转换小数为整数'+Number.parseInt(ex4a))
//数字的取值范围
let ex4max=Math.pow(2,53)-1; //最大安全整数
let ex4min=-Math.pow(2,53)-1; //最xiao安全整数
console.log(ex4max,ex4min)
//ES6最大安全整数和最小安全整数
console.log("ES6提供了整数域值",Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(ex4max+10))