import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (!user || !user.token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
