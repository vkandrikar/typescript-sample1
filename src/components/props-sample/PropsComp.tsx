import { CompProps } from './PropsComp.types'

export default function PropsComp({ name, age, address, vehicles, children, styles }: CompProps) {
  return (
    <div style={styles}>
      {children}
      <p>{`My name is ${name} and I am ${age} years old.`}</p>
      <p>{`My Address: ${address.flat} ${address.society} ${address.contact.mobile} ${address.contact.email}`}</p>
      <p>My vehicles</p>
      {
        vehicles.map((vehicle, index) => {
          return (
            <div key={index}>
              {`${vehicle.name} of type ${vehicle.type}`}
            </div>
          )
        })
      }
    </div>
  )
}
