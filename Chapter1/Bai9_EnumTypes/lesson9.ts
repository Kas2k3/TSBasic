//dung enum nhu string va nhu number
enum API_STATUS {
    // PENDDING, FULFILLED, REJECTED //PROMISE
    PENDDING = "PENDDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}

let a1 = API_STATUS.PENDDING;
let a2 = API_STATUS.FULFILLED;

console.log(">>> a1 = ", a1, " a2 = ", a2);