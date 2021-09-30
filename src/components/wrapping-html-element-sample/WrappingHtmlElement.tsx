
// we can pass children as string number or any other component or html element
// also we can pass other props of button as ...rest
type Comp1Props = {
  variant: 'primary' | 'secondary';
} & React.ComponentProps<'button'>

const Comp1 = ({ variant, children, ...rest }: Comp1Props) => {
  return (
    <button className={`btn-${variant}`} {...rest}>{children}</button>
  )
}


// restrict children to be string only
// we have added our custom children props and removed children props provided by button
type Comp2Props = {
  variant: 'primary' | 'secondary';
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const Comp2 = ({ variant, children, ...rest }: Comp2Props) => {
  return (
    <button className={`btn-${variant}`} {...rest}>{children}</button>
  )
}

export const WrappingHtmlElement = () => {
  return (
    <div>
      <Comp1 variant='primary' onClick={() => console.log('hello')}>Click Me</Comp1>
      <br />
      {/* this will give error as mix is not define by us and not provided by button */}
      {/* <Comp1 variant='primary' mix='hi'>Click Me</Comp1> */}
      <br />
      <Comp1 variant='primary'><h2>Click Me</h2></Comp1>
      <br />
      <Comp2 variant='secondary'>Click Me</Comp2>
      <br />
      <Comp2 variant='secondary' onClick={() => console.log('clicked')}>Click Me</Comp2>
    </div>
  )
}
