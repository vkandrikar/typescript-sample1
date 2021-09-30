import React from 'react'

type Props1<T> = {
  value: T;
  onClick?: (arg: T) => void
}

type Props2<T> = {
  items: T[]
}

type ObjType = {
  name: string;
  age: number
}

//<T extends {}> allow to extend of all type number, string, boolean, object, etc
const Sample1 = <T extends {}>({ value, onClick }: Props1<T>) => {
  return (
    <div>
      <h3>Basic sample generic type as props - {value}</h3>
      {
        onClick && <button onClick={() => onClick(value)} >Click Me</button>
      }
    </div>
  )
}

//<T extends string | boolean> allow to extend only type string, boolean
const Sample2 = <T extends string | boolean>({ value, onClick }: Props1<T>) => {
  return (
    <div>
      <h3>Basic sample generic type as props - {value}</h3>
      {
        value === true && <h4>You have pass boolean value as props</h4>
      }
    </div>
  )
}

const Sample3 = <T extends {}>({ items }: Props2<T>) => {
  return (
    <div>
      {
        items.map((item, index) => {
          return <div key={index}>{item}</div>
        })
      }
    </div>
  )
}

export const GenericProps = () => {
  return (
    <div>
      <Sample1 value='Vijay' />
      <Sample1 value={100} onClick={(arg) => console.log(arg)} />
      <hr></hr>
      <Sample2 value='Vijay' />
      <Sample2 value={true} />
      <hr></hr>
      <Sample3 items={[1, 2, 3, 4]} />

    </div>
  )
}
