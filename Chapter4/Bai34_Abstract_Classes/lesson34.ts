abstract class Employee {
    constructor(private firstName: string, private lastName: string) { }
    abstract getSalary(): number; //abstract method

    //normal method
    get fullName(): string {
        return `${this.firstName} $(this.lastName)`;
    }
    compensationSatement(): string {
        return `${this.fullName} makes ${this.getSalary()}a month.`
    }
}

//const e1 = new Employee("phuoc", "kas");//Error

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}

const test = new FullTimeEmployee("phuoc", "kas", 1000);
console.log(">>> test: ", test.getSalary());