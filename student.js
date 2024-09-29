class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

class Student extends Person {
    constructor(name, age, gender, rollNo, grade) {
        // Use super to call the constructor of the parent class
        super(name, age, gender);

        // Validate roll number
        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }

        this.rollNo = rollNo;
        this.grade = grade;
    }

    // Override printDetails method from Person class
    printDetails() {
        // Use super to call the printDetails method of the parent class
        super.printDetails(); 
        console.log(`Roll No: ${this.rollNo}, Grade: ${this.grade}`);
    }

    // Additional method specific to Student
    study() {
        console.log(`${this.name} is studying.`);
    }
}

// Example usage of Person and Student classes
try {
    // Creating a valid Student object
    const student1 = new Student('John Doe', 20, 'Male', 1, 'A');
    student1.printDetails();  // Overridden method
    student1.study();         // Student specific method

    // Creating an invalid Student object to demonstrate error handling
    const student2 = new Student('Jane Doe', 22, 'Female', 0, 'B');
} catch (error) {
    console.error(error.message);
}
