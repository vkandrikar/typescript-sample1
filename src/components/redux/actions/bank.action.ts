import { BankAction, BankActionTypes } from '../action-types/bank.action.type';
import { Dispatch } from 'redux';

export const depositeMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionTypes.DEPOSITE,
      payload: amount
    })
  }
}

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionTypes.WITHDRAW,
      payload: amount
    })
  }
}

export const bankrupt = () => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionTypes.BANKRUPT
    })
  }
}