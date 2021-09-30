import { GreetUser } from '../component-props-sample/GreetUser'

// if we want prop type of any of our own or external component 
// we added our version props into GreetUser props
type OwnCompType = {
  version: number;
} & React.ComponentProps<typeof GreetUser>

const OwnComp = ({ name, version }: OwnCompType) => {
  return (
    <div>
      {name} {version}
      <GreetUser name={name} />
    </div>
  )
}

// external component or element 
type ExternalType = {
  version: string;
} & Omit<React.ComponentProps<'input'>, 'children'>

const Comp2 = ({ version, ...rest }: ExternalType) => {
  return (
    <input {...rest} id={version} />
  )
}


export const ExtractingPropType = () => {
  return (
    <>
      <OwnComp name='Vijay' version={1} />
      <Comp2 version='id' type='text' placeholder="Enter your name" />
    </>
  )
}
