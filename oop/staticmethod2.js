/*
class myMath {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}
*/

class cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    static registerStray() {
        const names = ['muffin', 'biscuit', 'sleepy', 'dodo', 'princess butterface'];
        const name = choice(names);
        return new cat(name, 'unknown');
    }
    meow() {
        return `this ${this.name} says meow!`;
    }
}

function choice(arr) {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}