/***
 * Questions
 */

/***
 * aq 2.3
 */

// 1

// function func(x) { return x % 2; }

// let a = [5, 15, 25, 35, 55];
// console.log(a.map(func));
// output: [1, 1, 1, 1, 1]

// 2

// a = [1, 2, 3];
// [b, c] = a;
// console.log(c);
// output: 2

// 3
// a = [1, 2, 3];
// b, c = a;
// console.log(c);
// ReferenceError: b is not defined

// 4
// a = [1, 2, 3];
// [b, ...c] = a;
// console.log(c);
// output: [2, 3]

// 5
// x = new Array(5);
// x[0] = 1;
// x[1] = 3;
// y = []
// for (i in x) {
//     y.push(i);
// }
// console.log(y.length);
// output: 2

/***
 * aq 2.4
 */


// 1

// let a = { 'a': 1, 'b': 2, 'c': function() { return "Hello"; } };
// let b = { __proto__: a, 'd': 3 };
// console.log(b.length, b.c()); // undefined Hello

// 2

// class A {
//     constructor(name) {
//         this.name = name;
//     }
//     get output() {
//         return this.name;
//     }
//     set input (name) {
//         this.name = name;
//     }
// }

// obj = new A();
// obj.input = 'Abhi';
// console.log(obj.output); // Abhi

// 3

// x = [1, 2, 3, 4, 5, 6];
// y = [...x, 7, 8, 9];
// console.log(y.length); // 9

// 4

// x = [1, 2, 2, 4, 5, -2, -7, -9];
// console.log(x.sort()); // [-2, -7, -9, 1, 2, 2, 4, 5]
// console.log(x.sort((a, b) => a - b)); // [-9, -7, -2, 1, 2, 2, 4, 5]

//5

// x = [1, 2, 2, 4, 5, -2, -7, -9];
// console.log(x.sort((a, b) => b - a)); // [5, 4, 2, 2, 1, -2, -7, -9]

/***
 * AQ 2.5
 */

// 1

// x = [1, 2, 3, 4, 5, 6];
// v = x.reduce((a, i) => a + i, 10);
// console.log(v); // 31