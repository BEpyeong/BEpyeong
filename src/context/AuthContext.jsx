import { createContext, useState } from 'react';

export const AuthContextStore = createContext({
});

const AuthContext = ({ children }) => {
  return (
    <AuthContextStore.Provider >
      {children}
    </AuthContextStore.Provider>
  );
};

export default AuthContext;
