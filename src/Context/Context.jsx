import React, { createContext, useState } from 'react';
export const Context = createContext();

export const DataProvider = ({ children }) => {
  const [carObj, setCarObj] = useState({
    id: '',
    productos: [],
  });
  const [logged, setLogged] = useState({
    isLoggedIn: false,
    user: {},
  });

  return (
    <Context.Provider value={{ carObj, setCarObj, logged, setLogged }}>
      {children}
    </Context.Provider>
  );
};
