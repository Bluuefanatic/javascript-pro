class MyClass {
    #privateMethod() {
        console.log("PRIVATE METHOD CALLED");
    }

    publicMethod() {
        return this.#privateMethod();
    }
}

const myClass = new MyClass();
console.log(myClass.publicMethod());
