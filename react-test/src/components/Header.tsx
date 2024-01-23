import { Person } from "../types/Person";

const p1: Person = {
  name: "Dixit",
  age: 20,
};

export function Header() {
  return (
    <div>
      <h1>
        Hello {p1.name} with age = {p1.age}
      </h1>
    </div>
  );
}
