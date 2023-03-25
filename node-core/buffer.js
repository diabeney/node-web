'use strict';

const message = 'I know what it feels like to los';
const buf = Buffer.from(message);
const buf2 = new Uint8Array(0);

const json = JSON.stringify(buf);
console.log(json)


let compare = Buffer.compare(buf, buf2);
// console.log(compare)
// console.log(buf)
