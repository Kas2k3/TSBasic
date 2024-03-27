function addNumberOrString(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

console.log(">>> check: ", addNumberOrString(6, 9));
console.log(">>> check: ", addNumberOrString('kas ', '20215455'));

//bao loi ngay khi code do boolead khong nam trong kieu du lieu cho phep
//console.log(">>> check: ", addNumberOrString(true, 9));