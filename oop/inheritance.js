class Triangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getArea() {
        return (this.a + this.b) / 2;
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe() {
        return `i am a triangle with area of ${this.getArea()}`;
    }
}


class colorTriangle extends Triangle {
    constructor(a, b, color) {
        super(a, b);
        this.color = color;
    }
}

class moodTriangle extends colorTriangle {
    constructor(a, b, color, mood) {
        super(a, b, color);
        this.mood = mood;
    }
}














/*
class ShyTriangle extends Triangle {
    describe() {
        return `runs and hides`;
    }

    beShy() {
        return `i am shy`;
    }
}
*/