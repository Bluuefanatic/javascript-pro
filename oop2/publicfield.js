class cat {
    static numOfCats = 0;
    numLegs = 4;
    hasTail = true;

    constructor(name) {
        this.name = name;
        cat.numOfCats += 1;
    }
    amputate() {
        this.numLegs -= 1;
    }
}