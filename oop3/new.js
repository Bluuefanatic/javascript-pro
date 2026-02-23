/*
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
*/

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

/*
function user(username, email) {
    this.username = username;
    this.email = email;
    this.isAdmin = false;
}
*/