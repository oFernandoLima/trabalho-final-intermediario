import { createContext, useContext, useState } from "react";

const mockUsers = [
  { email: "user1@example.com", name: "User One", password: "password123" },
  { email: "user2@example.com", name: "User Two", password: "password456" },
  { email: "user3@example.com", name: "User Three", password: "password789" },
];

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return { success: true };
    }
    return { success: false, message: "Invalid email or password." };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
