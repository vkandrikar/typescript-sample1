import React from 'react'

type CompProps = {
  name: string;
  isMale?: boolean;
  isFemale?: boolean;
}

type Name = {
  name: string;
}
type Male = Name & {
  isMale: boolean;
  isFemale?: never;
}
type Female = Name & {
  isFemale: boolean;
  isMale?: never;
}
type CompProps1 = Male | Female;

const Comp = ({ name, isMale, isFemale }: CompProps) => {
  return (
    <div>
      <span>Hi {name}, </span>
      {
        isMale && <span>you are looking handsome.</span>
      }
      {
        isFemale && <span>you are looking beautiful.</span>
      }
    </div>
  )
}

//--------------------------
const Comp1 = ({ name, isMale, isFemale }: CompProps1) => {
  return (
    <div>
      <span>Hi {name}, </span>
      {
        isMale && <span>you are looking handsome.</span>
      }
      {
        isFemale && <span>you are looking beautiful.</span>
      }
    </div>
  )
}

export const RestrictingProps = () => {
  return (
    <div>
      <h1>This will allow to pass both optional props</h1>
      <Comp name='Vijay' isMale />
      <Comp name='Vijay' isFemale />
      <Comp name='Vijay' isMale isFemale />
      <hr></hr>
      <h1>This will allow to pass either isMale or isFemale optional props</h1>
      <Comp1 name='Vijay' isMale />
      <Comp1 name='Rosy' isFemale />
    </div>
  )
}
