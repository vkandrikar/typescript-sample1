export type UserProps = {
  name: string;
}

export const GreetUser = ({ name }: UserProps) => {
  return (
    <div>
      <h2>This is User Comp {name}</h2>
    </div>
  )
}
