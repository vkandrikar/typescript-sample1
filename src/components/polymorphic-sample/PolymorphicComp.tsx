import React from "react";

// will work for specific element like button
type ElementProps = {
  variant: 'warning' | 'danger';
  children: React.ReactNode;
  as?: React.ElementType;
} & React.ComponentProps<'button'>

const Element1 = ({ variant, children, as, ...rest }: ElementProps) => {
  const Component = as || 'div';

  return (
    <Component className={`btn-${variant}`} {...rest}>{children}</Component>
  )
}

// generic
type ElementOwnProps<E extends React.ElementType> = {
  variant?: 'warning' | 'danger';
  children?: React.ReactNode;
  as?: E;
}

// to remove duplicate props we have to Omit props define by us from ComponentProps
type ElementProps2<E extends React.ElementType> = ElementOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ElementOwnProps<E>>

const Element2 = <E extends React.ElementType>({ variant, children, as, ...rest }: ElementProps2<E>) => {
  const Component = as || 'div';

  return (
    <Component className={`btn-${variant}`} {...rest}>{children}</Component>
  )
}

export const PolymorphicComp = () => {
  return (
    <div>
      <Element1 variant='danger' as='button' onClick={() => console.log('clicked')}>sample 1</Element1>
      <Element1 variant='warning'>sample 2</Element1>
      {/* can pass props only defined by us or button to Element1*/}
      {/* <Element1 variant='danger' as='label' htmlFor='id'>Name:</Element1> */}
      <hr />
      <Element2 as='label' htmlFor='id'>Sample Label</Element2>
      <Element2 as='input' id='id' placeholder='Enter your name' />
      <Element2 as='button' onClick={() => console.log('clicked')}>Click Me</Element2>
    </div>
  )
}
