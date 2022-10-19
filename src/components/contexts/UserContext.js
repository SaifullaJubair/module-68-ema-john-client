import React, { createContext } from 'react';

export const AuthContext = createContext()

const authInfo = {}
const UserContext = ({ children }) => {

   return (
      <div>
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
      </div>
   );
};

export default UserContext;