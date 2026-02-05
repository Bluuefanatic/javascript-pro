class circle {
    constructor(radius) {
        this._radius = radius;
    }
    set radius(value) {
        if (value < 0) {
            throw new Error("radius cannot be negative");
        } else {
            this._radius = value;
        }
    }
}