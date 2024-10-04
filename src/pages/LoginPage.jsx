import React, { useState } from 'react';
import '../assets/LoginPage.css';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
    } else {
      await login(email, password); 
      alert('Inicio de sesión exitoso!');
      navigate('/'); 
    }
  };

  return (
    <div className="login-page">
      <div className="overlay"></div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
