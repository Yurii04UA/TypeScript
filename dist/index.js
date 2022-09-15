"use strict";
function f(atg, arg2) {
    console.log(arg2);
}
const f2 = (a, b) => {
    return a + b;
};
class User {
    constructor(props) {
        this.name = props.name,
            this.age = props.age;
    }
    printName() {
        return `${this.name}`;
    }
}
const newUser = new User({
    name: 'Yur',
    age: 22,
});
