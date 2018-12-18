// //main.js 
// var Hello = require('./hello'); 
// //hello = new Hello(); 
// hello.setName('BYVoid'); 
// hello.sayHello(); 

//main.js 

// console.log('Hello'); 
// debugger;
// var hello11=require('./hello').sayhello('Colin'); 
// require('./hello').exec11;
//hello11.hello("Colin");
//hello = new Hello(); 



const hello2=require('./hello2.js');
hello2.sayhello("Colin");
hello2.sayhello_a("Colin");

hello2.sayhello_b_export("MIS Manager");
hello2.sayhello_c_export(" MIS Manager","WeiHai City");

const asyn1=require("./asynTest");
//asyn1.asyncFunction();