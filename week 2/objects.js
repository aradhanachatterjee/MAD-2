/***
 * Basic object literals and methods
 */

// Objects
// let xx = {'a': 5, 'b': 'hello'};
// console.log(xx); // { a: 5, b: 'hello'}
// xx.add = function(x, y) {
//     return x + y;
// }
// console.log(`xx is of type ${typeof(xx)}`); // xx is of type object
// console.log(`xx.add is of type ${typeof(xx.add)}`); // xx.add is of type function
// console.log(`Evaluate the function xx.add(3,4) gives ${xx.add(3,4)}`); // Evaluate the function xx.add(3,4) gives 7

// Special variable `this`
// Add a function that uses the value;
// xx.f = function(x) {
//     return this.a + x;
// }
// console.log(xx.f(10)); // 15

/***
 * Copying
*/

// let x = {'a': 1, 'b': 2};
// let y = x;
// console.log(x); // { a: 1, b: 2}
// console.log(y); // { a: 1, b: 2}
// x.a = 3;
// console.log(x); // { a: 3, b: 2}
// console.log(y); // { a: 3, b: 2}

// let z = {...x};
// x.a = 5;
// console.log(x); // { a: 5, b: 2}
// console.log(y); // { a: 5, b: 2}
// console.log(z); // { a: 3, b: 2}

/***
 * get and set properties
*/

// let user = {
//     first: 'Albert',
//     last: 'Pinto',
//     get full() {
//         return this.first + ' ' + this.last;
//     },
//     set full(f) {
//         const parts = f.split(' ');
//         this.first = parts[0];
//         this.last = parts[1];
//     }
// }
// console.log(user.full);
// user.full = 'John Doe';
// console.log(`Now ${user.first} and ${user.last}`);


/***
 * Function methods
 */

// let xx = {'a': 5, 
//     'b': 'hello',
//     'add': function(x, y) {
//         return x + y + this.a;
//     }
// };

// console.log(xx.add(3,4)); // 12
// let z = xx.add;
// call()
// console.log(z.call("", 3, 4)); // NaN
// console.log(z.call(xx, 3, 4)); // 12

// apply() - spreads the arguments - extra ignored

// console.log(z.apply(xx, [1, 2, 3, 4])); // 8

// bind() - closure

// let z2 = z.bind(xx, 2);
// console.log(z2(3)); // 10

/***
 * Prototypes
 */

// const x = {a: 1, inc: function() {this.a++;}};
// console.log(x); // { a: 1, inc: [Function] }
// const y = {__proto__: x, b: 2};
// console.log(y); // { b: 2 }
// console.log(y.a); // 1
// y.inc(); 
// console.log(y.a); // 2

/***
 * Classes
 */

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     describe() {
//         return `${this.name} makes a sound ${this.sound}`;
//     }
// }

// let x = new Animal('Jerry');
// console.log(x.describe());  // Jerry makes a sound undefined

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//         this.sound = 'woof';
//     }
// }

// let y = new Dog('Momo');
// console.log(y.describe());  // Momo makes a sound woof

// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//         this.sound = 'meow';
//     }
//     static fromJson(o) {
//         c = new Cat(o.name);
//         c.sound = o.sound;
//         return c;
//     }
// }

// let c = new Cat('Miffy');
// console.log(c.describe());  // Miffy makes a sound meow

/***
 * JSON back and forth
 */

// let p = JSON.stringify(c);
// console.log(c); // Cat { name: 'Miffy', sound: 'meow' }
// console.log(p); // {"name":"Miffy","sound":"meow"}

// let cc = Cat.fromJson(JSON.parse(p));
// console.log(cc.describe());  // Miffy makes a sound meow