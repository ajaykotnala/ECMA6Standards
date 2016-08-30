function log(level, msg) {
    if (level === "debug") {
        console.log("log function: ", msg);
    }
}

log("debug", "hello")


function restParameter(level, ...args) {
    if (level === "debug") {
        console.log("restParameter function: ", args[0]);
    }
}

var obj = { a: "ajay", b: "kotnala" }
restParameter("debug", obj)


function forOfLoop(level, ...args) {
    if (level === "debug") {
        console.log(`forOfLoop function:${args[1]}`);
    }
    for (item of level) {
        console.log(`loop item :  + ${item}`);
    }
}

var obj = { a: "ajay", b: "kotnala" }
forOfLoop("debug", obj, "my obj")



//destructuring of code
function forFunctions(level, ...args) {
    function sayHi() {
        console.log(`hey hii ${args[0].a}`);
    }

    function sayBye() {
        console.log(`ba bye ${args[1]}`);
    }

    return { sayHi, sayBye }
}

var obj = { a: "ajay", b: "kotnala" }

forFunctions("debug", obj, "pawan").sayHi();

var {sayBye} = forFunctions("debug", obj, "pawan");

var {sayBye: bye, sayHi: hi} = forFunctions("debug", obj, "pawan");

bye();
hi();


var [, x] = [1, 2, 1, 1, 1, 1]
console.log(x);

//use of this destructuring:
//var aclib = require("aclib");
//aclib.listservice();
//var {listservice, createservice ,etccccc} = require("aclib")  if you just need one method from entire lib you can use this one.
//listservice()

//destructuring end of code



//block scope start

let loopvalue = 1;

for (let loopvalue = 1; loopvalue < 10; loopvalue++) {
    console.log(loopvalue);
}

console.log(`after block over for letloop value of loopvalue is ${loopvalue}`);// test if after converting let into var.


const constVar = 10;
//constVar = 20; error 

const constBlockVar = 10;
if (true) {
    //this const will die after this block so outside consolelog will return 10;
    const constBlockVar = 20;
    console.log(`constBlockVar value inside loop ${constBlockVar}`)
}

console.log(`constBlockVar value is ${constBlockVar}`)

//block scope end


//arrow functions starts versions 4,5,6

//without arrow
function SumWithOutArrow(x = 5, y = 10) {
    return x + y;
}
console.log(`sum function without arrow function ${SumWithOutArrow(10, 10)}`);


//with arrow
var SumWithArrow = (x = 5, y = 10) => { return x + y; }
//if i have only one line like above then
//var SumWithArrow = (x=5,y=10) =>x+y

console.log(`sum function with arrow function ${SumWithArrow(10, 20)}`);

//arrow with complex objects;
function GreetingService(name) {
    this.name = name;
    this.sayHi = function sayHi() {
        console.log(`Say hi from greeting service ${this.name}!!`);
    }
    this.sayAsyncHi = function sayHi() {
        setTimeout(function() {
            console.log(`Say async hi from greeting service ${this.name}!!`);
        }, 2000);
    }
}

var gs =  new GreetingService("ajay");
//this will throw error as lexical binding happens late.
gs.sayAsyncHi();

//this will throw error as it is not lexical binded
var {sayHi} = new GreetingService("Pawan");
sayHi();

// after converting it to arrow this will go aways
function GreetingServiceWithArrow(name) {
    this.name = name;
    this.sayHi = () => {
        console.log(`Say hi from greeting arrrow service ${this.name}!!`);
    }
    this.sayAsyncHi = () => {
        setTimeout(() => {
            console.log(`Say async hi from greeting arrow service ${this.name}!!`);
        }, 6000);
    }
}

var gs =  new GreetingServiceWithArrow("Ajay with Arrow");
//this will throw error as lexical binding happens late.
gs.sayAsyncHi();

//this will throw error as it is not lexical binded
var {sayHi} = new GreetingServiceWithArrow("Pawan With Arrow");
sayHi();


//arrow functions end