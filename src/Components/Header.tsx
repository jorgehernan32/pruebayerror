import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Mi Aplicación en React con TypeScript</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
