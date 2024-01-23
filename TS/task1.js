"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
// const isMinor = (person: Person): boolean => {
//     return person.age < 18 && person.isStudent
// }
const isMinor = (persons) => {
    return persons.filter((person) => person.age < 18 && person.isStudent);
};
exports.persons = [
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
];
// let minors: Person[] = [];
// persons.forEach((person) => {
//     if(isMinor(person))
//         minors.push(person);
// });
// console.log("Minors: ", minors);
// console.log("Minors are: ", isMinor(persons))
