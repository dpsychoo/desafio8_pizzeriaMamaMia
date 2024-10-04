import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => (
  <div className="card">
    <img src={pizza.img} alt={pizza.name} />
    <h2>{pizza.name}</h2>
    <p>{pizza.desc}</p>
    <p>Precio: ${pizza.price}</p>
    <Link to={`/pizza/${pizza.id}`}>
      <button>Ver Detalles</button>
    </Link>
  </div>
);

export default CardPizza;
