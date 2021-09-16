import PropsComp from './PropsComp';
import { Address, Vehicles } from './PropsComp.types'
import Title from './Title';

export const PropsSample = () => {
  const name = 'Vijay';
  const age = 35;
  const address: Address = {
    flat: 'Z3 Alpha 602',
    society: 'Roseland',
    contact: {
      mobile: 12345,
      email: 'abc@xyz.com'
    }
  };
  const vehicles: Vehicles = [
    {
      name: 'i20',
      type: '4 Wheeler'
    },
    {
      name: 'city',
      type: '4 Wheeler'
    },
    {
      name: 'aviator',
      type: '2 Wheeler'
    }
  ];

  return (
    <div>
      <h1>With String as Children</h1>
      <PropsComp
        name={name}
        age={age}
        address={address}
        vehicles={vehicles}
        styles={{ border: '1px solid red' }}
      >
        This is Children
      </PropsComp>
      <hr></hr>
      <h1>No Children</h1>
      <PropsComp
        name={name}
        age={age}
        address={address}
        vehicles={vehicles}
        styles={{ border: '1px solid blue' }}
      />
      <hr></hr>
      <h1>With Another Comp as Children</h1>
      <PropsComp
        name={name}
        age={age}
        address={address}
        vehicles={vehicles}
        styles={{ border: '1px solid orange' }}
      >
        <Title title='This is Title Comp' />
      </PropsComp>
    </div>
  )
}
