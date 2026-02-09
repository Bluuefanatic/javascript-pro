class MyClass {
    #privateMethod;

    #privateMethod() {
        console.log("PRIVATE METHOD CALLED");
    }

    publicMethod() {
        this.#privateMethod();
    }
}

const myClass = new MyClass();
console.log(myClass.publicMethod());
