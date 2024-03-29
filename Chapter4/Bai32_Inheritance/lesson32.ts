class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person {
    private jobTitle;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string
    ) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    //overwrite
    describe(): string {
        return `${super.describe()} from parent - kas`
    }
}

let employee = new Employee('phuoc', 'kas', 'web dev');
console.log(employee.getFullName());
console.log(employee.describe());

