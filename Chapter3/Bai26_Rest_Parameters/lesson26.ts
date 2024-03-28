//toan tu '...' cho phep copy cac phan tu truyen vao
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
// console.log(getTotal());
// console.log(getTotal(10, 20));
// console.log(getTotal(10, 20, 30));


function multiply(n: number, ...m: number[]) {
    //tra ve mot new array
    return m.map((x) => n * x);
}
//a nhan gia tri [10, 20, 30, 40]
const test = multiply(10, 1, 2, 3, 4);


//
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(",") + "!"
}
console.log(Greet("Hello", "Steve", "Bill"));
Greet("Hello");

