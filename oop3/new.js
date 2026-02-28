/*
const myObj = {
    color: "purple",
    score: 99,
    greet() {
        console.log("HI!!!");
    }
}
*/

/*
function user(username, email) {
    this.username = username;
    this.email = email;
    this.isAdmin = false;
}
*/


class dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        return `${this.name} says woof!`;
    }
    sleep() {
        return `${this.name} is sleeping!`;
    }
}

class GuardDog extends dog {
    constructor(name, breed, owner) {
        super(name, breed);
        this.owner = owner;
    }
}
/*
function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.bark = function () {
        return `${this.name} says woof!`;
    }

    this.sleep = function () {
        return `${this.name} is sleeping!`;
    }
}
*/

function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

Dog.prototype.bark = function () {
    return `${this.name} says woof!`;
}

Dog.prototype.sleep = function () {
    return `${this.name} is sleeping!`;
}

/*
const grandparent = {
    greet() {
        console.log("hi there")
    }
}

const parent = {
    color: "purple",
    sing() {
        console.log("la la la");
    },
    __proto__: grandparent
}

const child = {
    num: 3,
    __proto__: parent
}
*/