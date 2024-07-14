/***
 * Questions
 */

/***
 * aq 2.2
 */

// 1

// let a = [1, 2, 3, 4, 5];
// console.log(Object.keys(a));
// output: ['0', '1', '2', '3', '4']

// 2

// let a = [1, 2, 3, 4, 5];
// console.log(Object.values(a));
// output: [1, 2, 3, 4, 5]

// 3

// let a = [1, 2, 3];
// console.log(Object.entries(a));
// output: [['0', 1], ['1', 2], ['2', 3]]

// 4
// let a = [1, 2, 3, 4, 5];
// a.length = 9;
// console.log(a.length);
// output: 9

// 5
// let a = [1, 2, 3, 4, 5];
// a.length = 9;
// console.log(a);
// output: [1, 2, 3, 4, 5, <4 empty items>]
// therefore, number of holes is 4

// 6
// let a = [2, 3, 4];
// let b = [1, 2, ...a, 5];
// console.log(b);
// output: [1, 2, 2, 3, 4, 5]


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

/***
 * AQ 2.6
 */

// 1

// class A {
//     constructor (name) {
//         this.name = name;
//     }
// }

// obj = new A('Abhi');
// console.log(typeof(JSON.stringify(obj))); // string

// 2

// class A {
//     constructor (name) {
//         this.name = name;
//     }
// }

// obj = new A('Abhi');
// temp = JSON.stringify(obj);
// console.log(typeof(JSON.parse(temp))); // object

/***
 * Practice Assignment
 */

// 1

// for (const i = 1; i <= 5; i++) {
//     console.log(i)
// }

// for (const i in [1, 2, 3, 4, 5]) {
//     console.log(i)
// }

// 2

// let a = [2, 3, 4];
// let b = [2, 2, ...a, 5];
// let c = b.find(x => x % 2);
// console.log(c); // 3

// 3

// let a = {
//     'first_name': 'abhi',
//     'age': 22,
//     'place': 'delhi'
// };

// let { first_name : alt } = a;
// console.log(first_name); // ReferenceError: first_name is not defined

// 4

// arr = ['iitmonline', true, 3, (a, b) => a + b]
// let result = Array()
// for (let i = 0; i < arr.length; i++) {
//     result.push(typeof arr[i])
//     }
// console.log(result) // [ 'string', 'boolean', 'number', 'function' ]

// 5

// arr = ['iitmonline', true, 3, (a, b) => a + b]
// let result = Array()
// for (const i in arr) {
//     result.push(arr[i] * arr[i])
//     }
// console.log(result) // [ NaN, 1, 9, NaN ]

// 6

// fruit = {
//     name: 'Apple',
//     color: 'red',
// }

// let description = ({ name, color, shape = 'Spherical' }) => {
//     console.log(`${name} is ${color} and ${shape}`)
// }

// description(fruit) // apple is red and Spherical

// 7

// class Player {
//     constructor (name) {
//         this.name = name
//         this.team = 'Indian Cricket Team'
//         this.nationality = 'Indian'
//     }
// }

// class Bowler extends Player {
//     constructor (name, wicket, average) {
//         super(name)
//         this.role = 'Bowler'
//         this.wicket = wicket
//         this.average = average
//     }
// }

// bumbum = new Bowler('Jasprit Bumrah', 101, 22.79)
// console.log(bumbum) // Bowler {name: 'Jasprit Bumrah', team: 'Indian Cricket Team', nationality: 'Indian', role: 'Bowler', wicket: 101, …}

// 8

// class Player {
//     constructor (name, team) {
//         this.name = name
//         this.team = team
//     }

//     get describe() {
//         return `${this.name} from ${this.team} is a ${this.role}`
//     }
// }

// class Batsman extends Player {
//     constructor (name, team) {
//         super(name, team)
//         this.role = 'Batsman'
//     }
// }

// p = new Batsman('Rohit', 'Indian Cricket Team')
// console.log(p.describe) // Rohit from Indian Cricket Team is a Batsman

// 9

// const obj = {
//     a: 10,
//     operation(x, y, n) {
//         return x ** n + y + this.a
//     },
// }

// const arr = Array()
// p = obj.operation
// arr.push(p.bind(obj, 2)(3, 2))
// arr.push(p.apply(obj, [2, 2, 3, 4, 5]))
// arr.push(p.call(obj, 2, 3, 4))
// console.log(arr); // [17, 20, 29]


// 10

// const obj = {
//     firstName: 'Narendra',
//     lastName: 'Mishra',

//     get fName() {
//         return this.firstName
//     },

//     get lName() {
//         return this.lastName
//     },

//     set lName(name) {
//         this.lastName = name
//     },
// }

// obj.lName = 'Mourya'
// obj.lName = console.log(obj.lName) // Mourya

// Graded Assignment

// 1

// let a = [75, 55, 22, 5];
// console.log(a.sort()); // [22, 5, 55, 75]
// .sort sorts the array in lexicographical order - 2 comes before 5 and 5 comes before 7

// 2
// a = {
//     name: 'Abhi',
//     age: 22
// };

// b = [];
// for (let i = 0; i < 3; i++) {
//     b.push(a);
// }
// console.log(b);

// // b[1].name = 'Akshay';
// console.log(b[0].name); // Akshay