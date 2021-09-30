
import { Greet } from "./Greet"
import { UserProps } from "./GreetUser"

type CompProps = {
  isLogin: boolean;
  component: React.ComponentType<UserProps>
}

export const ComponentProps = ({ isLogin, component: Component }: CompProps) => {
  return (
    <div>
      {
        isLogin ?
          <Component name='Vijay' />
          :
          <Greet />
      }
    </div>
  )
}
