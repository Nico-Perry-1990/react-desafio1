import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Error al iniciar sesión");

      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      setError(null);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Error al registrarse");

      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      setError(null);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const getProfile = async () => {
    if (!token) return null;
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Error al obtener perfil");
      setEmail(data.email);
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  // 🔹 Logout
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  useState(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    if (storedToken) {
      setToken(storedToken);
      setEmail(storedEmail);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        error,
        login,
        register,
        getProfile,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};