const assert = require("assert");

function add(a, b) {
  return a + b;
}

// assert.strictEqual(add(1.3,4), 6)

const user = {
  name: "yaw",
  age: 26,
  address: {
    city: "Kumasi",
    tel: "2334",
  },
};

function logInAkosomboUser(user) {
  assert.deepStrictEqual(user.address, { city: "Akosombo", tel: "233" });
  console.log("logging user in...");
}

// logInAkosomboUser(user)

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((item) => item !== func);
  }
}

const observer = new Observable();

function a() {}

observer.subscribe(a);
console.log(observer.observers);
observer.unsubscribe(a);
console.log(observer.observers);
