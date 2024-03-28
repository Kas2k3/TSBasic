class Employee {
    public empCode: string;
    empName: string;
    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}

let emp = new Employee("aaa", "bbb");
emp.empCode = "123";
emp.empName = "kas";

console.log(">>> check emp: ", emp)