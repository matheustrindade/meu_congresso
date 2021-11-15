import React, {createContext} from 'react';

export const AuthenticationContext = createContext({});
export const AuthenticationProvider = ({children}) => {
  return (
    <AuthenticationContext.Provider value={{isAuthenticated: false}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
