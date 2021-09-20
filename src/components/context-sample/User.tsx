import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
  const userContext = useContext(UserContext);

  const handleUserLogin = () => {
    userContext.setUser({ name: 'Vijay', email: 'abc@xyz.com' });
  }

  const handleUserLogout = () => {
    userContext.setUser(null)
  }

  const searchResult = userContext.getUserByName('Rob');

  return (
    <div>
      <button onClick={handleUserLogin} >Login</button>
      <button onClick={handleUserLogout} >Logout</button>
      <h3>{`User name is ${userContext.user?.name}`}</h3>
      <h3>{`User email is ${userContext.user?.email}`}</h3>
      <h3>{`Search result: ${searchResult?.name} - ${searchResult?.email}`}</h3>
    </div>
  )
}
