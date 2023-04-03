const math = require('../module/lib/math');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdin.on('data', (text) => {
    process.stdout.write(text.toUpperCase());
})

console.time('mean op');
console.log(math.arithmeticmean(2,1,3,4));
console.timeEnd('mean op')
