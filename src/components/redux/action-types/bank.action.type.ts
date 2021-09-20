export enum BankActionTypes {
  DEPOSITE = 'deposite',
  WITHDRAW = 'withdraw',
  BANKRUPT = 'bankrupt'
}

type UpdateActions = {
  type: BankActionTypes.DEPOSITE | BankActionTypes.WITHDRAW;
  payload: number
}

type BankruptAction = {
  type: BankActionTypes.BANKRUPT
}

export type BankAction = UpdateActions | BankruptAction;