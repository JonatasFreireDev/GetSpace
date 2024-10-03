export interface UserState {
  userId: string;
  email: string;
  name: string;
  address: Address;
}

interface Address {
  city: string;
  state: string;
}

export interface SetUserReducerAction {
  field: Exclude<keyof UserState, "adress">;
  value: string;
}

export interface SetUserAddressReducerAction {
  field: keyof Address;
  value: string;
}
