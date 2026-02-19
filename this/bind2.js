/*
const btn = document.querySelector("#clickMe");
btn.addEventListener("click", function () {
    console.log("Button clicked!");
})
*/

const conan = {
    name: 'conan',
    city: 'los angeles',
    sing: function () {
        console.log("this is: ", this);
        console.log(`${this.name} in ${this.city} sings la la la`);
    }
}

const btn = document.querySelector("#clickMe");
btn.addEventListener("click", conan.sing.bind(conan));