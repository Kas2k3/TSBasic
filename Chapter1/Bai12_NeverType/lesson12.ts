function handleException(errorMessage: string): never {
    throw Error(errorMessage)
}

//khi vong lap vo han thi khong nen dung never
function runInfinity() {
    while (true) {
        console.log("running...")
    }
}

handleException("just a test error");

//void van tra ve gia tri undefined