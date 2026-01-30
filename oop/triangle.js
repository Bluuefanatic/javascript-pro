//using functions
function getTriangleArea(a, b) {
    return (a + b) / 2;
}

function getTriangleHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}

//using pojo
let myTri = {
    a: 3,
    b: 4,
    getArea: function () {
        return (this.a + this.b) / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
};

let myTri2 = {
    a: 5,
    b: 12,
    getArea: function () {
        return (this.a + this.b) / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
};

// using class
/*class Triangle {
    getArea() {
        return (this.a + this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    sayHi() {
        return "Hi from a Triangle";
    }
};*/

//using constructor function
class Triangle {
    constructor(sideA, sideB) {
        this.a = sideA;
        this.b = sideB;
    }
    getArea() {
        return (this.a + this.b) / 2;
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};