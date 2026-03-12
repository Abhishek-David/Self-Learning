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



/* //higher order functions

function abcd(val){
    return function(){
        console.log("HEHEHEHEHEHEHEHEHEHE");
    }
}

abcd()();


 */

// pure vs impure functions





