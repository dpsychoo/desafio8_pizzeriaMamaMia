import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="profile-page">
      <h2>Perfil de Usuario</h2>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <p>No estás autenticado.</p>
      )}
    </div>
  );
};

export default ProfilePage;


/* {
  "email": "david@david.com",
  "password": "123123"
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdmlkQGRhdmlkLmNvbSIsImlkIjoiVVl6XzJWeTlyTnc3dUVMUTdBWjhEIiwiaWF0IjoxNzI4MDUxMDk2fQ.yP1z3i_XWDQAM3h9iE88lSJKvnZ5eeiapapMBYz8Dt8"
} */