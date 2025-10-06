import React, { createContext, useState, ReactNode } from 'react';

type User = {
  rollNo: string;
  name: string;
  role: 'admin' | 'student';
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (rollNo: string, password: string) => Promise<void>;
  signOut: () => void;
  changePassword: (oldP: string, newP: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  signIn: async () => {},
  signOut: () => {},
  changePassword: async () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Mock sign-in: roll numbers starting with A are admins
  const signIn = async (rollNo: string, password: string) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const role = rollNo.toLowerCase().startsWith('a') ? 'admin' : 'student';
    setUser({ rollNo, name: 'User ' + rollNo, role });
    setLoading(false);
  };

  const signOut = () => setUser(null);

  const changePassword = async (oldP: string, newP: string) => {
    await new Promise((r) => setTimeout(r, 500));
    // no-op for mock
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, changePassword }}>
      {children}
    </AuthContext.Provider>
  );
};
