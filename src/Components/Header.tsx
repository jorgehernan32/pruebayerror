import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex">
      <h1>Mi Aplicación en React con TypeScript</h1>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
    </header>
  );
};

export default Header;
