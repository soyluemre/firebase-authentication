import { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const LoginContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [giris, setGiris] = useState(false);

  useEffect(() => {
    userObserver(setGiris);
  }, []);

  return (
    <LoginContext.Provider value={{ giris, setGiris }}>
      {children}
    </LoginContext.Provider>
  );
};
export default AuthContextProvider;
