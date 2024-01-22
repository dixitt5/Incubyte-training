interface Student {
    name: string;
    age: number;
    marks: number[];
}

const calculateMarkSum = (student: Student) => {
    // extract marks
    const marks = student.marks;
    return marks.reduce((accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
    }, 0);
}

const student1: Student = {
    name: "Student 1",
    age: 21,
    marks: [1,2,3,4],
}
console.log(calculateMarkSum(student1));