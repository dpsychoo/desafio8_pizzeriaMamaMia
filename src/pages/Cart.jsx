import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Cart = () => {
  const { cartItems, clearCart, calculateTotal } = useCart();
  const { user } = useUser();
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckout = async () => {
    if (!user) {
      alert("Debes iniciar sesión para realizar una compra.");
      return;
    }

    const token = localStorage.getItem("token");
    
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cart: cartItems,
      }),
    });

    if (response.ok) {
      setSuccessMessage("¡Compra realizada con éxito!😊🍕");
      clearCart();
    } else {
      const errorData = await response.json();
      alert(`Error: ${errorData.error || "Ocurrió un error al procesar la compra.😵‍💫❌"}`);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toLocaleString()} (Cantidad: {item.quantity})
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal().toLocaleString()}</h3>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Realizar Compra
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
