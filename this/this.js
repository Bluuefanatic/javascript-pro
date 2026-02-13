/*const person = {
    name: 'Alice',
    city: 'los angeles',
    sing: function () {
        console.log("this is: ", this);
        return `${this.name} in ${this.city} sings la la la`;
    }
}*/






class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    dance(style = 'salsa') {
        return `meow, i am ${this.firstName} and i like to ${style}`;
    }
}







/*function greet() {
    return `hi there`;
}

function whatIsThis() {
    console.log("the value of this is:", this);
}

const obj = {
    color: "purple",
    age: 2,
    whatIsThis: whatIsThis,
}*/