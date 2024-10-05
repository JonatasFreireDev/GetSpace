export interface UserState {
  userId: string;
  email: string;
  name: string;
  address: Address;
}

export interface Address {
  city: string;
  state: string;
}

export interface SetUserReducerAction {
  field: keyof UserState | `address.${keyof Address}`;
  value: string;
}
