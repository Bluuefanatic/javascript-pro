class circle {
    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    //setter for the radius
    set radius(value) {
        if (value < 0) {
            throw new Error("radius cannot be negative");
        } else {
            this._radius = value;
        }
    }

    get color() {
        return this._color;
    }

    //setter for color
    set color(newColor) {
        const validColors = ["red", "green", "blue"]
        if (validColors.has((newColor)) {
            this._color = newColor;
        } else {
            throw new Error("this color is not allowed");
        }
    }
}