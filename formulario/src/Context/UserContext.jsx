/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
export const Context = React.createContext({});

export function UserContextProvider({children}) {
    const [userData,setUserData] = useState([]);
    return (
      <Context.Provider value={{userData,setUserData}}>
          {children}
      </Context.Provider>
    );
}