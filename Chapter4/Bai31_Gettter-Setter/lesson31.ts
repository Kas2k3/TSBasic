class Person {
    private _age: number;
    public firstName: string;
    public lastName: string;


    constructor(_age: number, firstName: string, lastName: string) {
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //getter
    get age() {
        return this._age;
    }

    //setter
    set age(age2: number) {
        if (age2 < 0 || age2 > 150) {
            throw Error("Invalid age")
        }
        this._age = age2;
    }

}


let person1 = new Person(21, 'phuoc', 'kas');
let checkAge = person1.age; //setter

person1.age = 69 //setter
console.log(">>> check age: ", person1)//getter