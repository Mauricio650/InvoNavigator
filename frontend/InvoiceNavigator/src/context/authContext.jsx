import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [user, setUser] = useState({})

  const updateUser = (user) => {
    return setUser(user)
  }

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}
