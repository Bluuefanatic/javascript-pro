class circle {
    #radius;
    constructor(radius) {
        this.#radius = radius;
    }

    getRadius() {
        return this.#radius
    }
}

const myCircle = new circle(7);
console.log(myCircle.getRadius());