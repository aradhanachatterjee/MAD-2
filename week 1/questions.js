// let p = {}
// console.log(p)
// console.log(p.value)


// syntax error for the following code:

// const y
// console.log(y)

// reason - declaration without initialization

// let z = 14
// z = 15
// console.log(z)

// const obj = {color: 'red'}
// obj.changeColor = function (color) {this.color = color}
// obj.changeColor('blue')
// console.log(obj.color)


// PA 

// Question 2

// {
//     let x = 5;
// }
// console.log(x)

// Reference Error

// q4

// let x

// console.log(x)

// answer: undefined

// q5

// const x = 14
// x = 15

// console.log(x)

// answer: type error

// q6

// const obj = {color: 'red',
//     changeColor: function (color) { this.color = color }}


// obj.changeColor("Yellow")


// console.log(obj.color)

// ans: Yellow

// q7

// const sum = (x, y) => {return x+y}
// console.log(typeof(sum))

// this is a function

// const sum = (x, y) => x+y
// console.log(typeof(sum))

// this is a function

// const sqr = x => {return x*x}
// console.log(typeof(sqr))

// function too

// const sqr = x => x*x

// console.log(typeof(sqr))

// function

// ga 4

// const obj = {
//     name: 'Rohit',
//     changeName: function (name) {
//         this.name = name
//     },
// }

// obj.changeName('Mohit')
// console.log(obj.name)

// Answer: Mohit

// ga 5

// const x = { name: 'rohit' }
// x.name = 'Mohit'

// console.log(x.name)

// Answer: Mohit

// ga 6

// const obj = {
//     name: 'Rohit',
//     changeName: (name) => {
//         this.name = name
//     }, 
// }

// obj.changeName('Mohit')
// console.log(obj.name)

// Answer: Rohit

// ga 7

// const obj = {
//     name: 'Rohit',
//     arrowFunction: null,
//     normalfunction: function () {
//         this.arrowFunction = () => {
//             console.log(this.name)
//         }
//     },
// }

// obj.normalfunction()
// obj.arrowFunction()

// Answer: Rohit

// ga 8

// setTimeout(() => console.log('hello from setTimeOut one'), 0)
// console.log('hello for main one')
// setTimeout(() => console.log('hello from setTimeOut two'), 0)
// console.log('hello from main two')

// ga 10

// let startNamePrinter = (name) => {
//     let x = name.split('').reverse()
//     let handler = setInterval(() => {
//         let y = x.pop()
//         console.log(y)
//     }, 1000)

//     setTimeout(() => {
//         clearInterval(handler)
//     }, (name.length + 1)*1000)
// }

// startNamePrinter('orange')

// Answer: n