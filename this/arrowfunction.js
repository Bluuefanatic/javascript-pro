// const add = (x, y) => x + y;

class Cat {
    constructor(firstName) {
        this.firstName = firstName;
    }

    superGreet() {
        console.log(`#1: i am ${this.firstName}`)

        setTimeout(function () {
            console.log(`#2: i am ${this.firstName} `);
        }, 500);

        setTimeout(() => {
            console.log(`#3: i am ${this.firstName} `);
        }, 1000);
    }
}