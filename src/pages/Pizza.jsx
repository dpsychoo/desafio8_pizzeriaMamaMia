import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };

    fetchPizza();
  }, [id]);

  if (!pizza) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <img src={pizza.img} alt={pizza.name} style={styles.image} />
      <h1 style={styles.name}>{pizza.name}</h1>
      <p style={styles.price}>${pizza.price.toLocaleString()}</p>
      <p style={styles.description}>{pizza.desc}</p>
      <p style={styles.ingredients}>
        <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
      </p>
      <button 
        style={styles.button} 
        onClick={() => addToCart(pizza)} 
      >
        Añadir al Carrito
      </button>
    </div>
  );
};

// CSS 
const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },
  name: {
    margin: "1rem 0",
    color: "#2c3e50",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  price: {
    color: "#27ae60",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  description: {
    color: "#7f8c8d",
    fontSize: "1.1rem",
    margin: "1rem 0",
  },
  ingredients: {
    color: "#7f8c8d",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#27ae60", 
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.1rem",
    marginTop: "1rem",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#2ecc71",
  },
};

export default Pizza;
