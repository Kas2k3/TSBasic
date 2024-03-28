let sum = (x, y, z = false) => {
    if (z === false) {
        return x + y;
    }
    if (z) return x - y;

}

console.log(">>> check sum", sum(1, 2), sum(1, 2, 3));
//NaN: not a number