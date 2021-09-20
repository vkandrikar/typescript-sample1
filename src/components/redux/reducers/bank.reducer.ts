import { BankActionTypes, BankAction } from "../action-types/bank.action.type"

const initialState = {
  balance: 0
};

const bankReducer = (state = initialState, action: BankAction) => {
  switch (action.type) {
    case BankActionTypes.DEPOSITE:
      return {
        ...state,
        balance: state.balance + action.payload
      }
    case BankActionTypes.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload
      }
    case BankActionTypes.BANKRUPT:
      return {
        ...state,
        balance: 0
      }
    default:
      return state
  }
}

export default bankReducer;