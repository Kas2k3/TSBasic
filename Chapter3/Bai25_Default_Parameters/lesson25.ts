const sum1 = (x: number, y: number, z = false) => {
    if (z === false) {
        return x + y;
    }
    if (z) return x - y;

}

console.log(">>> check sum", sum1(1, 2), sum1(1, 2, true));
