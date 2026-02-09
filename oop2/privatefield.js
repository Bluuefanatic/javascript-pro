class circle {
    #radius;
    constructor(radius) {
        this.#radius = radius;
    }
}

const myCircle = new circle(5);
console.log(myCircle.#radius);