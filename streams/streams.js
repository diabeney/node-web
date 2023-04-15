const Readable = require('stream').Readable;

class MyReadStream extends Readable {
    constructor(options) {
        super(options);
        this.counter = 10;
        this._read = this.readfn;
    }

    readfn(n) {
        this.push('hello');
        if(this.counter-- === 0) {
            this.push(null)
        }
    }
}

const mystream = new MyReadStream();
mystream.pipe(process.stdout)

// mystream.on('readable', () => {
//     console.log(mystream.read())
// })

