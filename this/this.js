/*const person = {
    name: 'Alice',
    city: 'los angeles',
    sing: function () {
        return `${this.name} in ${this.city} sings la la la`;
    }
}*/

class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }

    dance(style = 'salsa') {
        return `meow, i am ${this.firstName} and i like to dance ${style}`;
    }
}