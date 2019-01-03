function asyncFunction (callback){
    setTimeout(callback,200);
    console.log('output in function asyncFunction ');
}

let color="blue";
asyncFunction(()=>{
    console.log('the Color is ' + color);
    }
);
color='Green';

//Hi
//这里输初的是the color is Green,因为是异步的
// exports.asyncFunction= callback =>asyncFunction(callback);
