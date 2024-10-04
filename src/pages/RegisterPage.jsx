import React, { useState } from 'react';
import '../assets/RegisterPage.css'; 
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; 

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.');
    } else {
      const result = await register(email, password); 
      if (result) {
        navigate('/'); 
      }
    }
  };

  return (
    <div className="register-page">
      <div className="overlay"></div>
      <div className="form-container">
        <h2>Register</h2>
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
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
