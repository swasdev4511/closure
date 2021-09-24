// Example - 1 : timer function
function stopWatch() {
    let startTime = Date.now();
    return function getElapsedTime() {
        let elapsedTime = Date.now() - startTime;
        alert(elapsedTime);
    }
}

let timer = stopWatch(); // here, ideally stopwatch function and its variables are garbage-collected but the function 
                         // getElapsedtime forms a closure and the references of variables in its lexical environment are 
                         // being remembered

for(let k =0; k < 10000000;k++) {
    var test = Math.random * 1000;
}
timer();


// Example - 2 : create Adder - a factory function
function createAdder(y) {
    return function(x) {
        return x+y;
    }
}
let adder1 = createAdder(5);
let adder2 = createAdder(100);

console.log(adder1(10));
console.log(adder2(50));