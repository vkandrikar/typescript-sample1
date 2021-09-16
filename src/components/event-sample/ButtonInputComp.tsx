import { useState } from "react";

type ButtonInputCompProps = {
  handleClick: (evt: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  value: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

type User = {
  name: string;
  email: string;
}

export const ButtonInputComp = (props: ButtonInputCompProps) => {
  const { handleClick, value, handleChange } = props;

  // option1 where we have to check user before accessing it's properties i.e user?.name
  //const [user, setUser] = useState<User | null>(null);

  // option2 where we can use type assertion as assign empty object and we don't have to set back to null
  const [user, setUser] = useState<User>({} as User);
  return (
    <div>
      <button onClick={(evt) => handleClick(evt, 1)}>Click Me</button>
      <button onClick={(evt) => handleClick(evt, 2)}>Click Me</button>
      <input value={value} onChange={handleChange} />
      <hr></hr>

      <button onClick={() => setUser({ name: 'Vijay', email: 'abc@xyz.com' })}>Set User</button>
      {/* Option1 */}
      {/* <button onClick={() => setUser(null)}>Reset User</button>
      <p>{`${user?.name} ${user?.email}`}</p> */}

      {/* Option2 */}
      <p>{`${user.name} ${user.email}`}</p>
    </div>
  )
}
