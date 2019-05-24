class Human {
    constructor(name) {
        this.name2 = name;
        // debugger;

        this.sayName = this.sayName.bind(this);
    }

    sayName() {
        // debugger;

        return this.name;
    }
}

const ron = new Human('Ron');

console.log('→ ron.sayName', ron.sayName());

// console.log('→ setTimeout', setTimeout(ron.sayName, 1000));
// console.log('→ setTimeout', setTimeout(() => ron.sayName(), 2000));
// console.log('→ setImmediate', setImmediate(ron.sayName));
