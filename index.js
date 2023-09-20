function receivesAFunction(callback){
    return callback();
}
// receivesAFunction
returnsANamedFunction();
function returnsANamedFunction(){
    return function passedFunction(){

    }
}

function returnsAnAnonymousFunction(){ 
 return () => {

 }
}