interface Person {
    name: string;
    age: number;
    isStudent: boolean
}

const getMinorStudents = (persons: Person[]) => {
    let minorStudents: Person[] = [];
    persons.forEach((person: Person) => {
        if(person.isStudent && person.age < 18){
            minorStudents.push(person);
        }
    });
    return minorStudents;
}


const allPersons: Person[] = [
    {
        name: "John",
        age: 17,
        isStudent: true
    },
    {
        name: "Yash",
        age: 21,
        isStudent: true
    },
    {
        name: "Ramesh",
        age: 15,
        isStudent: true
    }
]
const val = getMinorStudents(allPersons)
console.log(val);

