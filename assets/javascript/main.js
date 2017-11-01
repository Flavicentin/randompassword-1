
//below is an example of module import
//IMPORTANT! index.html must be running on a server to use modules

import {helloWorld, example} from "./export-example.js";

helloWorld();
console.log(example.message);
