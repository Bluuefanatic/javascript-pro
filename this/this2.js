const joe = {
    firstName: 'joe',
    greet: function (greeting) {
        console.log(`${this.firstName} says ${greeting}!`);
    }
}

const george = {
    firstName: 'george',
    lastName: 'harrison',
}

const nums = [2, 3, 4, 99, 5]

function() {
    console.log(arguments);
    return Math.max(null, arguments);
}