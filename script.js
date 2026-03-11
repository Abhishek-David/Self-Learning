/*
**********Varibale and Declaration**********

Scope -> global, block, functional => aapka daira kaha tak hai

var 
-> window main add hota hai
-> funciton scope hota hai
-> firse declare kar sakte ho same name se error nahi aayega
-> only respects function's and not blocks

let
->firse declare nahi kar sakte ho same name se error aayega
-> window main add nahi hota
-> block scope 

const 
-> once declared, cannot change the value

Reassignment and Redeclaration
-> Reassignment is possible for both let and var
-> Redeclaration is only possible in var

Temporal Dead Zone (TDZ) => utna area jitne main js ko pta hai ki variable exisit karta hai par vo aapko value nahi de skta
-> variable declare karne se phele tak jitna space hoga vo uss variable ka TDZ hoga
-> TDZ sirf let and const main kaam karta hai | var main kaam NAHI karta

Hoisting impact per type
    -> Hoisting => ek variable ko jab js mein banate hai to vo variable do hisso main toot jata hai and uska declare part upar chala jaata hai and uska initializatiopn part neeche rhe jaata hai
```
for example if 
var a = 12
then => 
    var a = undefined;
    a = 12;
```
-> Hoisting happens in all three -> let const and var
var -> hoist -> undefined
let -> hoist -> reference error
const -> hoist -> reference error

Note -> check Object.freeze 
if there is an object stored in const, the the property of the object can be updated, to prevent that we can use object.freeze

**********Data types + Type system**********

data ka tyoe
primitives -> aisi saari values jinko copy karne par tumhe ek real copy mil jaye
    -> String, number, boolean, null, undefiuned, symbol, bigint
reference -> inko copy karne par real value nahi milegi but aapko reference milega parent ka
    -> arrays, objects, functions | [], {}, ()

'' -> single quotes
"" -> double quotes
`` -> backticks

null ka matlab hai aapne jaan boojh kar koi value nahi di | null value aap khud se dete ho
undefined ka matlab ki aapne ek variable banaya aur ussey value nahi di to jo value by default mil hai vo hai undefined

symbol -> unique immutable value
future main hum kuch libraries use karenge ab is case main un libraries main kai baar kuchh fields hoti hai jinse similar hum bhi bana dete hai aur galti se humari banai hui fields us library ki original fields ko change kar deta hai || since we dont want that, we use symbols

bigint -> if taking a big put n in last
for example -> let a = 999999999999999999999999n; | if you want to add anything => a = a + 2n;



Dynamic Typing -> JS main static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kar skte ho kyuki yaha par dynamic data types hai
```
for example 
let a = 12;
a = true;
```

Type of quirks => | eg -> typeof null === 'object'

NaN -> not a number

Type Coercion (== vs ===)
type coercion -> concept jisme appka ek type automatically convert hojayega 

Truthy and Falsy values => har value ko truth ya false main todkar rakha hai
falsy values => 0, false, "", null, undefined, NaN, document.all
rest all -> truthy

Why NaN is treated as a number ? => JS treat it as a failed number opereation, meaning for example if you do (number * string) then you will get NaN | a mathematical operation that cannot happen

Ternary Operator
=> conditon ? true : false

typeof shows wrong output for typeof null & typeof [] & typeof NaN
instanceof => check if it is a part of something | example => a instanceof Array
    => note -> instanceof only works with the reference values


**********Loops**********
Kuch bhi repeat karne ko loop kahete hai

break; => comes out of the loop
continue; => skip and keep going 


**********Functions**********

-> Function declarations, expressions, and arrow functions
-> Parameters vs arguments
-> Default, rest, and spread parameters
-> Return values and early returns
-> First-class functions (assign to variables, pass as arguments, return from other functions)
-> Higher-order functions
-> Pure vs impure functions
-> Closures and lexical scoping
-> IIFE (Immediately Invoked Function Expressions)
-> Hoisting differences between declaration and expression

syntax ->

function (){
// your code;
}

another way to write function

let fnc = function(){ // one thing to note that we dont write func name in fron of function, the fnc (variable name ) is the function name
//code;
}

Arrow functions 
let fnc = ()=>{
    }






*/

// Temporal Dead Zone
// error -> Uncaught ReferenceError: can't access lexical declaration 'a' before initialization
// console.log(a);
// let a = 10;

// symbol
// u1 is not equal to u2
// let u1 = Symbol("uid");
// let u2 = Symbol("uid");
// console.log(u1===u2);

// console.log(typeof 12);





// **********Functions**********
/* 
let fnc = function () {
    console.log("Hello World");
}
fnc();

 */



function dance(v1){         //parameters
    console.log(`${v1} naach rha hai`);
}

dance("Gadha");             //arguments
dance("Ghoda");



