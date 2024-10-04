import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { calculateTotal } = useCart(); 
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    alert('Sesión cerrada exitosamente.');
    navigate('/login'); 
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logo}>🍕 Pizzeria</Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/">Home</Link></li>
        {user ? (
          <>
            <li style={styles.navItem}>
              <Link to="/profile">Perfil ({user.email})</Link>
            </li>
            <li 
              style={{ ...styles.navItem, cursor: 'pointer', color: 'red' }} 
              onClick={handleLogout}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li style={styles.navItem}><Link to="/register">Register</Link></li>
            <li style={styles.navItem}><Link to="/login">Login</Link></li>
          </>
        )}
        <li style={styles.navItem}>
          <Link to="/cart">🛒 Total: ${calculateTotal().toLocaleString()}</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    color: "#fff",
    padding: "1rem",
  },
  logoContainer: {
    flex: "1",
  },
  logo: {
    fontSize: "1.5rem",
    color: "#fff",
    textDecoration: "none",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "2rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background 0.3s, color 0.3s",
  },
  navLinkHover: {
    backgroundColor: "#555",
  },
};

export default Navbar;
