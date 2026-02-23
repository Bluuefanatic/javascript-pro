class dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        return `${this.name} says woof!`;
    }
}












/*function Dog(name, breed) {
    console.log("THIS IS: ", this);
    this.name = name;
    this.breed = breed;
}

function user(username, email) {
    this.username = username;
    this.email = email;
    this.isAdmin = false;
}
*/