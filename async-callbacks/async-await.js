function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fist one done!')
        }, 1000)
    })
}
function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('second one done!')
        }, 3000)
    })
}
function third() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('third one done!')
        }, 5000)
    })
}

(async () => {
    const a = await first();
    console.log(a);
    console.log('before b');
    const b = await second();
    console.log(b);
    console.log('before c');
    const c = await third();
    console.log(c);
    console.log('after c.....DONE!!!');
})()

