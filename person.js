class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Regular method
    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }

    // Arrow function method
    getIntroduction = () => {
        return `Hi, I'm ${this.name}, and I am ${this.age} years old.`;
    }
}

const person1 = new Person('John Doe', 30, 'Male');
person1.printDetails();
console.log(person1.getIntroduction());
