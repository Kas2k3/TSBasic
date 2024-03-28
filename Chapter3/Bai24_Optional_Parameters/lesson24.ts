const sum1 = (x: number, y: number, z?: number) => {
    if (z) {
        return x + y + z;
    }
    return x + y;

}
console.log(">>> check sum 1 = ", sum1(1, 2, 3), sum1(1, 2));