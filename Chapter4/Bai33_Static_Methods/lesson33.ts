class Circle {
    static pi: number = 3.14;
    public test: number = 69;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

console.log(">>> check pi = ", Circle.calculateArea(10));