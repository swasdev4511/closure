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

// for(let k =0; k < 10000000;k++) {
//     var test = Math.random * 1000;
// }
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


// Example - 3 

function getSalaryByDepartment(department) {
    return function getPosition(position) {
        const appendStr = "L per Annum";
        if(department === "IT") {
            switch(position) {
                case "manager" : 
                    return 12.5+appendStr;
                case "developer" :
                    return 8.5+appendStr;
                case "tester" :
                    return 4.5+appendStr;
                default :
                    return 2.5+appendStr;
            }
        } else {
            return "Non-IT department!";
        }
        
    }
}

let department1 = getSalaryByDepartment("IT");
console.log(department1("manager"));

let department2 = getSalaryByDepartment("Sales");
console.log(department2("tester"));

let department3 = getSalaryByDepartment("IT");
console.log(department3("network engineer"));


// Example - 4

function a(para) {
    var i = 1;
    return function b() {
        var j = 10;
            return function c() {
                var k = 100;
                return function d() {
                    return i+j+k+para;
                }
            }
    }
}

let preResult = a(" $");
let midResult = preResult();
let finalResult = midResult();
console.log(finalResult());


// Example -5

const element = document.getElementById("my-btn");

let updateClickCount =(function myFunc() {
    let count = 0;
    return function() {
        ++count;
        document.getElementById("countVal").innerHTML = count;
    }
})(); 

element.addEventListener("click",updateClickCount);





// Example - 6

function complexCounter() {
    let count = 0;

    return {
        incr : function() { return ++count },
        decr : function() { return --count },
        val : function() { return count },
        reset : function() { count = 0; }
    }
}

let ctr1 = complexCounter();
ctr1.incr();
ctr1.incr();
console.log(`counter 1 value is ${ctr1.val()}`);

let ctr2 = complexCounter();
ctr2.incr();
ctr2.incr();
ctr2.incr();
ctr2.incr();
ctr2.decr();
ctr2.decr();
ctr2.decr();
ctr2.decr();
ctr2.decr();
ctr2.decr();
ctr2.decr();

console.log(`counter 2 value is ${ctr2.val()}`);
ctr2.reset();
console.log(`counter 2 value After reset is ${ctr2.val()}`);


