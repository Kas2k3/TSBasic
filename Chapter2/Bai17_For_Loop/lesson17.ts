for (let i = 0; i < 10; i++) {
    console.log(">>> i = ", i);
}
for (let i = 0; ; i++) {
    console.log(">>> i = ", i);
    if (i > 9) break;
}
for (let i = 0; ;) {
    console.log(">>> i = ", i);
    i++;
    if (i > 9) break;
}