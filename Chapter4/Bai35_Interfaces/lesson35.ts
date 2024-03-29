interface IPerson {
    firstName: string;
    lastName?: string;
    address: string
}

function getFullName(person: IPerson) {
    person.firstName = 'phuoc';
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'Phuoc',
    lastName: 'Kas',
    address: 'Hanoi'
};

console.log(getFullName(person));
