class myClass {
    publicField = "public field";

    #privateField = "private field";

    getPrivateField() {
        return this.#privateField;
    }
}