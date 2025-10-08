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
  addAdmin: (rollNo: string) => Promise<void>;
  removeAdmin: (rollNo: string) => Promise<void>;
  listAdmins: () => string[];
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  signIn: async () => {},
  signOut: () => {},
  changePassword: async () => {}
  , addAdmin: async () => {}
  , removeAdmin: async () => {}
  , listAdmins: () => []
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  // extraAdmins holds roll numbers (lowercased) that were granted admin by an admin
  const [extraAdmins, setExtraAdmins] = useState<string[]>([]);

  // Mock sign-in: roll numbers starting with A are admins
  const signIn = async (rollNo: string, password: string) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const lower = rollNo.toLowerCase();
    const role = lower.startsWith('a') || extraAdmins.includes(lower) ? 'admin' : 'student';
    setUser({ rollNo, name: 'User ' + rollNo, role });
    setLoading(false);
  };

  const signOut = () => setUser(null);

  const changePassword = async (oldP: string, newP: string) => {
    await new Promise((r) => setTimeout(r, 500));
    // no-op for mock
  };

  const addAdmin = async (rollNo: string) => {
    // mock: store in-memory list of promoted admins (lowercased)
    const lower = rollNo.toLowerCase();
    setExtraAdmins((prev) => (prev.includes(lower) ? prev : [...prev, lower]));
    // in real app: call backend / firestore to persist role change
    await new Promise((r) => setTimeout(r, 300));
  };

  const removeAdmin = async (rollNo: string) => {
    const lower = rollNo.toLowerCase();
    setExtraAdmins((prev) => prev.filter((r) => r !== lower));
    await new Promise((r) => setTimeout(r, 200));
  };

  const listAdmins = () => {
    return extraAdmins.slice();
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut, changePassword, addAdmin, removeAdmin, listAdmins }}>
      {children}
    </AuthContext.Provider>
  );
};
