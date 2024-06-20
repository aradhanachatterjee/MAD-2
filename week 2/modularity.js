/***
 * Basic import
 * Note how this file itself must be included as type="module" in the HTML file
 */

// import {c} from './module1.js';
// console.log(c);

/***
 * Import from module1
 */

// import {c, energy} from './module1.js';
// console.log(c);
// console.log(energy(1));

/***
 * Renaming imports
 */

// import {c as speedoflight} from './module1.js';
// console.log(speedoflight);

/***
 * Importing default export
 */

// import energy from "./module1.js";
// console.log(energy(10));

/***
 * Read-only view of exported variable
 */

// import {x, incx} from './module1.js';
// console.log(x);
// // x++;
// incx();
// console.log(x);