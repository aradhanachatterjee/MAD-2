/***
 * Basic array declaration - mixed mode 
 */
// let x = [1, 2, 3];
// console.log(`${typeof(x)}: ${x} with length = ${x.length}`); // object: 1,2,3 with length = 3
// console.log(x[0]); //  1

// // Mixed element types
// let y = [1, 'b', a => a + 1];
// console.log(`${typeof(y)}: ${y} with length = ${y.length}`); // object: 1,b,a => a + 1 with length = 3
// console.log(x.length, y.length); // 3 3

// // Deleting
// x = [];
// console.log(`${typeof(x)}: ${x} with length = ${x.length}`); // object:  with length = 0

// // Holes
// y.length = 10;
// console.log(`${typeof(y)}: ${y} with length = ${y.length}`); // object: 1,b,a => a + 1,,,,,,, with length = 10


/*** 
 * Iteration
*/
// let x = [1, 'b', a => a + 1];
// x.length = 5;
// for (let i=0; i<x.length; i++) {
//     console.log(`x: ${x[i]} of type ${typeof(x[i])}`);   
// }
// x: 1 of type number
// x: b of type string
// x: a => a + 1 of type function
// x: undefined of type undefined
// x: undefined of type undefined

// 'in' iteration - skips undefined entries
// for (const i in x) {
//     console.log(`x: ${x[i]} of type ${typeof(x[i])}`);   
// }
// x: 1 of type number
// x: b of type string
// x: a => a + 1 of type function

// 'of' iteration - takes values
// for (const i of x) {
//     console.log(`x: ${i} of type ${typeof(i)}`);   
// }
// x: 1 of type number
// x: b of type string
// x: a => a + 1 of type function
// x: undefined of type undefined
// x: undefined of type undefined

/***
 * Are objects iterable?
 */
// let x = {'a': 1, 'b': 'alpha', 'c': [3, 2, 1]};
// for (const i in x) {
//     console.log(i);
//     // console.log(x[i]);
// }

// tries to iterate directly over values of x - not iterable for const i of x
// for (const i of x) {
//     console.log(i); // TypeError: x is not iterable
//     // console.log(x[i]);
// }

// for (const [k, v] of Object.entries(x)) {
//     // console.log(v);
//     console.log(k, v);
// }

/***
 * Creating arrays with holes
 */

// let x = new Array(5);
// x[1] = 10;
// x[3] = 'hello';
// for (const [k, v] of x.entries()) {
//     console.log(`Index ${k}, value ${v} of type ${typeof(v)}`);
// }

// in operator only iterates over defined values
// for (const i in x) {
//     console.log(`Index ${i}, value ${x[i]} of type ${typeof(x[i])}`);
// }

/***
 * Spreading
 */

// let x = [1, 2, 3];
// let y = [0, ...x, 4];
// let z = [0, x, 4];
// console.log(x);
// console.log(y);
// console.log(z);

/***
 *  Iteration and Transformation
 */

let x = [1, -2, 3, -4, 5, 6, -7, 8];
let y = x.find (t => t < 0);
console.log(x);
console.log(y);

// find returns the first element that satisfies the condition - here, the first negative number in x. so y = -2

// console.log(x.filter(x => x < 0));
// x inside the filter function is a different x from the one outside - different scope
// better to use different variable names to avoid confusion

console.log(x.filter(t => t < 0));

// filter returns all elements that satisfy the condition - here, all negative numbers in x. so y = [-2, -4, -7]

console.log(x.map(i => i > 0 ? '+' : '-'));

// map applies the function to all elements of the array - here, if the element is positive, it returns '+', otherwise it returns '-'
// so output is ['+', '-', '+', '-', '+', '+', '-', '+']

// console.log(x.reduce((a, i) => a+i, 0));
// reduce applies the function takes two parameters - a and i and returns a + i. a's value is initialized to 0 within reduce function itself
// i is from the array on which reduce is called - here, x
/***
    * 1st iteration: a = 0, i = 1 => a + i = 1 -- a is now 1
    * 2nd iteration: a = 1, i = -2 => a + i = -1 -- a is now -1
    * 3rd iteration: a = -1, i = 3 => a + i = 2 -- a is now 2
    * 4th iteration: a = 2, i = -4 => a + i = -2 -- a is now -2
    * 5th iteration: a = -2, i = 5 => a + i = 3 -- a is now 3
    * 6th iteration: a = 3, i = 6 => a + i = 9 -- a is now 9
    * 7th iteration: a = 9, i = -7 => a + i = 2 -- a is now 2
    * 8th iteration: a = 2, i = 8 => a + i = 10 -- a is now 10
 */

// console.log(x.reduce((a, i) => a*i, 1));
// reduce can also be used to multiply all elements of the array together
/***
    * 1st iteration: a = 1, i = 1 => a * i = 1 -- a is now 1
    * 2nd iteration: a = 1, i = -2 => a * i = -2 -- a is now -2
    * 3rd iteration: a = -2, i = 3 => a * i = -6 -- a is now -6
    * 4th iteration: a = -6, i = -4 => a * i = 24 -- a is now 24
    * 5th iteration: a = 24, i = 5 => a * i = 120 -- a is now 120
    * 6th iteration: a = 120, i = 6 => a * i = 720 -- a is now 720
    * 7th iteration: a = 720, i = -7 => a * i = -5040 -- a is now -5040
    * 8th iteration: a = -5040, i = 8 => a * i = -40320 -- a is now -40320
*/

// console.log(x.sort());

// Output: [-2, -4, -7, 1, 3, 5, 6, 8]
// Performs a lexicographic sort - converts all elements to strings and sorts them in ascending order

// to sort as numbers, need to pass a comparison function to sort

// console.log(x.sort((a, b) => a - b));

/***
 * Destructuring
 */

// let x = [1, 2, 3];
// // let [a, b] = x;
// // // console.log(x, a, b);
// // console.log(a);
// // console.log(b);

// for (const [k, v] of x.entries()) {
//     console.log(`Index ${k}, value ${v} of type ${typeof(v)}`);
// }

// Object destructuring
// const person = {
//     firstName: 'Alpert',
//     lastName: 'Pinto',
//     age: 25,
//     city: 'Mumbai'
// };

// console.log(person);

// const {firstName: fn, city: c} = person;
// console.log(fn);
// console.log(c);

// // console.log(person);

// const {lastName, age} = person;
// console.log(lastName);
// console.log(age);

// const {firstName, ...rem} = person; // rem for remainder
// console.log(firstName);
// console.log(rem);