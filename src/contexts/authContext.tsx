import React, { createContext, ReactNode, useState } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
  changePassword: () => void;
  register: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async () => {
    console.log('Mobile Login Triggered');
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log('Mobile Logout Triggered');
    setIsAuthenticated(false);
  };

  const changePassword = () => {
    console.log('Change Password Triggered');
  };

  const register = () => {
    console.log('Register Triggered');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, changePassword, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
