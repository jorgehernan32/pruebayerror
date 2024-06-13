import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex ">
      <div className='flex'>
      <div className='flex justify-start'>
      <h1>Mi Aplicación en React con TypeScript</h1>
      </div>
      <nav className='flex justify-end'>
        <ul className='flex'>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
