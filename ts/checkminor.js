"use strict";
const array = [
    {
        name: "naviz",
        isStudent: true,
        age: 1,
    },
    {
        name: "dixit",
        isStudent: true,
        age: 1,
    },
];
const checkMinor = (student) => {
    return !student.isStudent && student.age >= 18;
};
const filterArray = (arr) => {
    arr = arr.filter(checkMinor);
    return arr;
};
console.log(filterArray(array));
