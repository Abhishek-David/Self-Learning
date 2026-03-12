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



// function dance(v1){         //parameters
//     console.log(`${v1} naach rha hai`);
// }

// dance("Gadha");             //arguments
// dance("Ghoda");

/* 
// default parameters
function add(v1 = 0,v2 = 0){
console.log(v1+v2);
}

add(); 

*/

/* 
// rest / spread parameters

function abcd(...val){
    console.log(val);
}

abcd(1,2,3,4,5,6,7,8,9,10);
 */




/* 
// first class functions

function abcd (val){    // this val now can be called as a funciton inside abcd
    val();
}

abcd(function (){       // cannot write the function name
    console.log("HEHEHEHEHEHEHEHEHHE");
});
 */


/* 
//higher order functions

function abcd(val){
    return function(){
        console.log("HEHEHEHEHEHEHEHEHEHE");
    }
}

abcd()(); */




/* // pure vs impure functions

//pure function 

function a(){
    console.log("Hello");
}

//impure function

let a = 0;
function b(){
    a++;
}

 */


// closures and lexcical scoping
/* 
function abcd(){
    let a = 12;
    return function (){
        console.log(a);
    }
}
 */


// IIFE (Immediately Invoked Funciton Expressions)

(function(){

})();

// Hoisting differences between declaration and expression
/* 
// works 

abcd();






function abcd(){
    console.log("HUIHUIHUIHUI");
}
 */


/* 
// wont work, throws error 

abcd();







let abcd = function(){
    console.log("HeHEHEHEHEHEHEHEHEHE");
}

 */



