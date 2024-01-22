interface Person1 {
    name: string;
    isStudent: boolean;
    age: number;
  }
  
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
  
  const checkMinor = (student: Person1) => {
    return !student.isStudent && student.age >= 18;
  };
  
  const filterArray = (arr: Person1[]) => {
    arr = arr.filter(checkMinor);
    return arr;
  };
  
  console.log(filterArray(array));
  