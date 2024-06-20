/***
 *  Basic updating of elements
 */
// const d1 = document.getElementById('d1');
// d1.innerHTML = 'welcome to d1';

// const d2 = document.getElementById('d2');
// d2.innerHTML = 'goodbye from d2';


// advanced stuff

// with timeouts

// async function demo() {
//     console.log("Just starting");
//     await new Promise(r => setTimeout(r, 2000));
//     const d1 = document.getElementById('d1');
//     d1.innerHTML = 'welcome to d1';
//     console.log("After two seconds");
//     await new Promise(r => setTimeout(r, 2000));
//     const d2 = document.getElementById('d2');
//     d2.innerHTML = 'goodbye from d2';
//     console.log("After four seconds");
// }

// demo();



// handling events onclick

let x = 0;
const d1 = document.getElementById('d1');
d1.innerHTML = `Click count: ${x}`;
d1.addEventListener('click', e => {
    x++;
    d1.innerHTML = `Click count: ${x}`;
    d1.style.fontSize = `${x+10}px`;
})