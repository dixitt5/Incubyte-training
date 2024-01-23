import { Person } from "../types/Person";

const person1: Person = {
  name: "Om",
  age: 20,
};

export function Header() {
  return (
      <div>
        <p>
          Hello, {person1.name}, with age: {person1.age}
        </p>
      </div>
  );
}
