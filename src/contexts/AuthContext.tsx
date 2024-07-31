import { createContext, ReactNode, useState, useEffect, useContext } from 'react';

type AuthContextType = {
  token: string | null;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadToken(){
      const storedToken = await localStorage.getItem("authToken");
      setToken(storedToken);
    }
    loadToken()
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado com AuthContextProvider');
  }
  return context;
};
