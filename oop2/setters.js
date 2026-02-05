class circle {
    constructor(radius) {
        this._radius = radius;
    }
    //setter for the radius
    set radius(value) {
        if (value < 0) {
            throw new Error("radius cannot be negative");
        } else {
            this._radius = value;
        }
    }
}