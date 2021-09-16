

type VehicleTypes = '4 Wheeler' | '2 Wheeler';
export type Vehicles = {
  name: string;
  type: VehicleTypes;
}[];

export type Address = {
  flat: string;
  society: string;
  contact: {
    mobile: number;
    email: string;
  }
}

export type CompProps = {
  name: 'Vijay' | 'Rupali';
  age: number;
  address: Address;
  vehicles: Vehicles;
  children?: string | React.ReactNode;
  styles?: React.CSSProperties
}