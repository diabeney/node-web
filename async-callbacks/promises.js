const promise = new Promise((resolve, reject) => {
    const username = 'taisus';
    const checker = username.length > 5;
    setTimeout(() => {
        if(!checker) {
            reject(new Error('Username is too short'));
        };
        resolve(username) 
    }, 3000);
});

promise.then((value) => {
    const fullname = 'Susana Taibobo';
    const obj = {name: fullname, username: value, verified: false};
    console.log(obj)
})
.catch((err) => console.log(err));