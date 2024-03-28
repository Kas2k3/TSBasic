let sum = (x, y, z) => {
    console.log(">>> check z = ", z)
    if (z) {
        return x + y + z;
    }
    return x + y;

}

console.log(">>> check sum", sum(1, 2));
//NaN: not a number