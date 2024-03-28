class Person {
    readonly birthDate: Date;


    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person(new Date(190, 12, 25));
person.birthDate = new Date(1991, 12, 25); //compile error