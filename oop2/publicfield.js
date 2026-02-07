class cat {
    static numOfCats = 0;
    constructor(name) {
        this.name = name;
        cat.numOfCats += 1;
    }
}