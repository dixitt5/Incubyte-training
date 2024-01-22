interface Person {
    name: string;
    age: number;
    isStudent: boolean
}

// const isMinor = (person: Person): boolean => {
//     return person.age < 18 && person.isStudent
// }

const isMinor = (persons: Person[]): Person[] => {
    return persons.filter((person) => person.age < 18 && person.isStudent)
}

const persons: Person[] = [
    {
        name: "Aditya",
        age: 20,
        isStudent: true
    },
    {
        name: "Manish",
        age: 17,
        isStudent: true
    },
    {
        name: "Yash",
        age: 30,
        isStudent: false
    },
    {
        name: "Naviz",
        age: 16,
        isStudent: true
    }
]

// let minors: Person[] = [];

// persons.forEach((person) => {
//     if(isMinor(person))
//         minors.push(person);
// });

// console.log("Minors: ", minors);

console.log("Minors are: ", isMinor(persons))