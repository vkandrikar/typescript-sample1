import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ReducersType, bankActions } from '../redux/index'

export const ReduxSample = () => {
  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney, bankrupt } = bindActionCreators(bankActions, dispatch); //Option 2 only
  const { balance } = useSelector((state: ReducersType) => state.bank);

  return (
    <div>
      <h3>{`Balance: ${balance}`}</h3>
      {/* to use option 1, need to comment line no 8  "bindActionCreators" 
      <button onClick={() => { dispatch(depositeMoney(100)) }} >Deposite $100 - Option 1</button>*/}

      {/* Option 2 */}
      <button onClick={() => { depositeMoney(100) }} >Deposite $100</button>
      <button onClick={() => { withdrawMoney(100) }} >Withdraw $100</button>
      <button onClick={() => { bankrupt() }} >Bankrupt</button>
    </div>
  )
}
