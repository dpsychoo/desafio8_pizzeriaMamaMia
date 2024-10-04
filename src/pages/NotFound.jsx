// Pagina NotFound con el juego del Dinosaurio XD
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/dino.css";

const NotFound = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elgoog.im/t-rex/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>¡Ups! Parece que esta página no existe.</p>
      <p>Mientras tanto, juega al Dinosaurio:</p>
      
      <div className="game-container">
        <iframe
          title="dino-game"
          src="https://elgoog.im/t-rex/"
          width="600"
          height="250"
          frameBorder="0"
        ></iframe>
      </div>

      <br />
      <Link to="/" style={{ fontSize: "18px", textDecoration: "none", color: "blue" }}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
