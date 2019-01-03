// function Hello() { 
//     var name; 
//     this.setName = function(thyName) { 
//         name = thyName; 
//     }; 
//     this.sayHello = function() { 
//         console.log('Hello ' + name); 
//     }; 
// }; 
// module.exports = Hello;

exports.sayhello=function (name) { 
    //var name;   
    
        console.log('Hello ' + name); 
  22
}; 

function say(word) {
    console.log(word);
  }
  
  function execute(someFunction, value) {
    someFunction(value);
  }
  
  exports.exc11=function() {
    console.log('fff');
    debugger;
      execute(say, "hi, pass say function as a paramater");
  };
