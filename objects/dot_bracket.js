const obj = {name : "Rupendra",age : 24}
let key = "email";
let value = "rupendra0060@gmail.com";
obj[key] = value;
console.log(obj)
const mySym = Symbol("hello");
obj[[mySym]]
console.log(obj);