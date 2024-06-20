/***
 * Questions
 */

// aq 2.3

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