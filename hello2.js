console.log("Running in hello2.js");
exports.sayhello=function (name) { 
    //var name;   
    
        console.log('Hello ' + name); 
  
}


function sayhello_a(name){
    console.log('Hello _a ' + name); 
}
module.exports.sayhello_a=sayhello_a;

function sayhello_b(name){
    console.log('Hello _a ' + name); 
}
//使用exports，增加一个属性
exports.sayhello_b_export=posistion  => sayhello_b("Colin " + posistion  );
//使用exports，增加两个属性
exports.sayhello_c_export=(posistion,address)  => sayhello_b("Colin " + posistion + " "+ address  );


