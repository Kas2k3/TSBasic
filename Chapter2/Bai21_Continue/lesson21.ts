for (let i = 0; i < 9; i++) {
    if (i % 2 === 1) continue;
    console.log(i);
}

let i = 0;
while (i < 9) {
    i += 1;
    if (i % 2) continue;
    console.log(i);
}


let i1 = 9, count = 0;
do {
    i1 += 1;
    if (i1 % 2) continue;
    count += 1;
} while (i1 < 99);
console.log(count);

