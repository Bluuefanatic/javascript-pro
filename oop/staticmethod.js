class cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    static meow() {
        return ` the ${this.breed} cat says meow!`;
    }
    static species = "felis catus"; // static property
}