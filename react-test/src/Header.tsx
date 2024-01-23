import { User } from "./models/User";

function Header(props: { name: string; age: number }) {
  const user = new User(props.name, props.age);
  return (
    <>
      <h1>
        Hello My name is {user.name} and I am {user.age} years old
      </h1>
    </>
  );
}

export default Header;
