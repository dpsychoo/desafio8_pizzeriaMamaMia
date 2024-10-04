import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      setUser({ email, token: data.token }); 
      localStorage.setItem("token", data.token); 
    } else {
      alert(data.error || "Error al iniciar sesión");
    }
  };

  const register = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.user) {
      setUser({ email, token: data.token }); //si hay token si, sino adios xd
      localStorage.setItem("token", data.token);
    } else {
      alert(data.error || "Error al registrarse");
    }
  };

  const getUserProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const response = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.user) {
      setUser(data.user);
    } else {
      alert(data.error || "Error al obtener el perfil");
    }
  };

  const logout = () => {
    setUser(null); 
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, register, getUserProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
