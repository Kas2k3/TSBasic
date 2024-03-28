function addNumber(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b == 'number') return a + b;
    if (typeof a === 'string' && typeof b == 'string') return a + b;
}

//overloading, can phai cong gop chung lai va phai co ham duy nhat co return
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
    return a + b;
};

// console.log(">>> check add new", addNew(6, 9), addNew('kas', 'phuoc'))


class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    };
}

let count = new Counter();
console.log(count.count());//return a number
console.log(count.count(20));//return an array
