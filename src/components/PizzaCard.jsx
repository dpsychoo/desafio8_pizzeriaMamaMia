import React from 'react';
import { useCart } from '../context/CartContext';

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <div className="card mb-3">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <p><strong>Precio: ${pizza.price.toLocaleString()}</strong></p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;