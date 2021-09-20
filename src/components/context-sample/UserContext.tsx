import { createContext, useState } from "react";

type User = {
  name: string;
  email: string;
}

type UserContextProviderProps = {
  children: React.ReactNode;
}

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  getUserByName: (name: string) => User | undefined;
}

const userArr = [{ name: 'Rob', email: 'rob@abc.com' }, { name: 'Max', email: 'max@abc.com' }];
const getUserByName = (name: string) => {
  const result = userArr.find(item => {
    return item.name === name
  })
  return result;
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser, getUserByName }} >{children}</UserContext.Provider>
  );
}