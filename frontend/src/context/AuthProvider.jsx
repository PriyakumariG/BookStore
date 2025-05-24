import React, { createContext, useContext, useState } from 'react'

export const AuthContext=createContext()
export default function AuthProvider({children}) {
  const initialAuthUser=localStorage.getItem("user");
  const [authuser,setAuthUser]=useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  )
 return(
    <AuthContext.Provider value={[authuser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
 )
}

export const useAuth=()=>useContext(AuthContext);
