class MyClass {
    #privateMethod() {
    }

    publicMethod() {
        return this.#privateMethod();
    }
}

const myClass = new MyClass();
console.log(myClass.publicMethod());
