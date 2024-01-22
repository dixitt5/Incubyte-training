"use strict";
const calculateMarkSum = (student) => {
    // extract marks
    const marks = student.marks;
    return marks.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
};
const student1 = {
    name: "Student 1",
    age: 21,
    marks: [1, 2, 3, 4],
};
console.log(calculateMarkSum(student1));
