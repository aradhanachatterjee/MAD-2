// const a = new Vue({
// el: '#app1',
// data: {
// message: 'Kumar',
// },
// });

// const b = new Vue({
// el: '#app2',
// data: {
// message: 'Rajput',
// },
// });

// const c = new Vue({
// el: '#app3',
// data: {
// message: 'Abhishek',
// },
// });

// const style1 = {
// color: 'red',
// };

// const style2 = {
// fontWeight: 'bold',
// };

// const optObject = {
// el: '#app',
// data: { style1: style1, style2: style2 },
// };

// const app = new Vue(optObject);

// const style1 = {
// color: 'red',
// };

// const style2 = {
// fontWeight: 'bold',
// };

// const optObject = {
// el: '#app',
// data: { style1: style1},
// };

// const app = new Vue(optObject);

// const dataObj = {
// message: 'Welcome',
// };

// const optObject = {
// el: '#app',
// data: dataObj,
// };

// const app = new Vue(optObject);
// app.message = 'Welcome to iitm online degree';



// const app = new Vue({
//     el: '#app',
//     data: {
//         text: "<p style='color: red'> Hello IITM </p>",
//     },
// });

// const app = new Vue({
//     el: '#app',
//     data: {
//         message: 'IITM Online Degree',
//         dark: true,
//         divStyle: {
//             backgroundColor: 'black',
//             color: 'white'
//         }
//     },
//     methods: {
//         toggleTheme() {
//             this.dark = !this.dark;
//         },
//     },
// });


// const comp1 = {
//     template: '<h4> This is {{name}}</h4>',
//     data: {
//         name: 'component 1',
//     },
// };

// const app = new Vue({
//     el: '#app',
// });

// const comp = {
//     template: '<li> {{message.message}} </li>',
//     props: ['message'],
// };

// const app = new Vue({
//     el: '#app',
//     data: {
//         messages: [
//             { message: 'This is message1' },
//             { message: 'This is message2' },
//             { message: 'This is message3' },
//         ],
//     },
//     components: {
//         'comp': comp,
//     },
// });