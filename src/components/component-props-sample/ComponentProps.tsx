
import { EventSample } from "../event-sample/EventSample"
import { Greet } from "./Greet"
import { GreetUser, UserProps } from "./GreetUser"

// to accept component and its specific props
type CompProps1 = {
  isLogin: boolean;
  component: React.ComponentType<UserProps>
}

const Comp1 = ({ isLogin, component: Component }: CompProps1) => {
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


// to accept any component where no props are required 
type CompProps2 = {
  component: React.ComponentType
}

const Comp2 = ({ component: Component }: CompProps2) => {
  return (
    <div>
      {
        <Component />
      }
    </div>
  )
}

export const ComponentProps = () => {
  return (
    <div>
      <Comp1 isLogin={true} component={GreetUser} />
      <Comp2 component={EventSample} />
    </div>
  )
}
