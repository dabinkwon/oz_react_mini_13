import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  // 컴포넌트가 마운트될 때 ([]) localStorage에서 사용자 세션 정보를 가져와 state를 초기화함
  useEffect(() => {
    const storedSession = localStorage.getItem("supabase_session");
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  const login = (sessionData) => {
    localStorage.setItem("supabase_session", JSON.stringify(sessionData));
    setSession(sessionData);
  };

  const logout = () => {
    localStorage.removeItem("supabase_session");
    setSession(null);
  };

  return (
    <AuthContext value={{ session, login, logout }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthProvider 안에서만 useAuth를 사용!");
  return context;
};
