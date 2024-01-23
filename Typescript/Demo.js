"use strict";
const getMinorStudents = (persons) => {
    let minorStudents = [];
    persons.forEach((person) => {
        if (person.isStudent && person.age < 18) {
            minorStudents.push(person);
        }
    });
    return minorStudents;
};
const allPersons = [
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
];
const val = getMinorStudents(allPersons);
console.log(val);
