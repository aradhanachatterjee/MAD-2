/////// - anything after more than two forward slashes is a comment in JavaScript
// console.log("Hello console!");

//// - Comments
// This is a single line comment
/* This is a multi-line
* comment similar to C or Java
*/

//// - Identifiers and Variables
// let x = 0;
// const AnotherVariable = 42;
// var we_dont_use_var = true;
// // // And Unicode!
// let शहर = 'சென்னை';
// console.log(शहर)

/// Scope - change var/let

// var x1 = 10;
// {
//     console.log(x1);
//     var x2 = 30;
// }
// console.log(x2);

// let x1 = 10;
// {
//     console.log(x1);
//     let x2 = 30;
// }
// console.log(x2);

// const x1 = 10;
// {
//     console.log(x1);
//     const x2 = 30;
// }
// console.log(x2);

/// Strings
// let s = "Hello";
// console.log(s);
// console.log(s.length);
// console.log(s[1]);
// console.log(s.substring(2, 4));
// let शहर = 'சென்னை';
// console.log(शहर.length)

/// templates
// let st = `${s} World!`;
// console.log(st);
// console.log(`Length of ${शहर} = ${शहर.length}`);

/// Operators and coercion
// console.log(1 + 2);
// console.log("1" + "2");
// console.log(1 + "2");
// console.log("1" * "2");

/// Loose and strict equality
// console.log(3 == 4);
// console.log(3 == 3);
// console.log(3 == "3");

/// strict equality
// console.log(3 === "3");
// console.log(undefined == null);
// console.log(undefined === null);

/// Control Flow and Functions

/****
 * Conditions
 */
// let x = 3;
// if (x == 5) {
//     console.log("What?");
// } else {
//     console.log("Of course 3 != 5");
// }

// let x = 5;
// if (x == 5) {
//     console.log("What?");
// } else {
//     console.log("Of course 3 != 5");
// }

// Iteration
// for (const x=0; x<5; x++) {
//     console.log(x);
// }

// doesn't work cuz const can't be reassigned

// for (let x=0; x<5; x++) {
//     console.log(x);
// }

// this works

// alt method using const

// const v = [1, 2, 3, 4];
// for (const x in v) {
//     console.log(x);
// }

// returns 0 1 2 3 - index values

// fix:

// const v = [1, 2, 3, 4];
// for (const x in v) {
//     console.log(v[x]);
// }

// alt fix - use const x of v instead of const x in v


// const v = [1, 2, 3, 4];
// for (const x of v) {
//     console.log(x);
// }

// functions
// function add(x, y) {
//     return x + y;
// }

// console.log(typeof(add));
// console.log(add(3, 4));
// add.v = {'a': 1, 'b': 2};
// console.log(add.v.a);

/// arrow notation
// let add1 = (x, y) => x + y;

// anonymous function or IIFE
// console.log(function(x, y) { return x + y; }(3, 4));

// let add2 = function(x, y) { return x + y; };

// console.log(typeof(add));
// console.log(typeof(add1));
// console.log(typeof(add2));

// all three are functions
