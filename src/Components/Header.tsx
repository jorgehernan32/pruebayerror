
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

/* import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-500 p-4 text-white  border-black">
      <h1 className="text-2xl font-bold">Mi Aplicación en React con TypeScript</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a className="hover:underline" href="/">Inicio</a></li>
          <li><a className="hover:underline" href="/about">Acerca de</a></li>
          <li><a className="hover:underline" href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; */
