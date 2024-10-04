import React from 'react';

const Header = () => {
  return (
    <header 
      className="header text-center d-flex flex-column justify-content-center align-items-center" 
      style={{
        position: 'relative',
        height: '400px',
        backgroundSize: 'cover',
        backgroundImage: `url('/images/pizzaBG.jpg')`,
        backgroundPosition: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}></div>
      <h1 style={{ zIndex: 2 }}>¡Pizzería Mamma Mia!</h1>
      <p style={{ zIndex: 2 }}>Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
