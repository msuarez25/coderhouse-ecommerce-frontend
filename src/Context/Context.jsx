import React, { createContext, useState } from 'react';
export const Context = createContext();

export const DataProvider = ({ children }) => {
  const [cartObj, setCartObj] = useState({
    products: [],
  });
  const [logged, setLogged] = useState({
    isLoggedIn: false,
    user: {},
  });

  return (
    <Context.Provider value={{ cartObj, setCartObj, logged, setLogged }}>
      {children}
    </Context.Provider>
  );
};
