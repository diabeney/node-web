const assert = require('assert');

function add(a, b) {
    return a + b;
}

// assert.strictEqual(add(1.3,4), 6)

const user = {
    name: 'yaw', 
    age: 26,
    address: {
        city: 'Kumasi', 
        tel: '2334',
    }
}

function logInAkosomboUser(user) {
    assert.deepStrictEqual(user.address, {city: 'Akosombo', tel: '233'});
    console.log('logging user in...')
}

logInAkosomboUser(user)