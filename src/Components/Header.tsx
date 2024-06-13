
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Mi Aplicación en React con TypeScript</h1>
          </div>
          <div className="flex space-x-4">
            <a className="text-gray-800 hover:underline" href="/">Inicio</a>
            <a className="text-gray-800 hover:underline" href="/about">Acerca de</a>
            <a className="text-gray-800 hover:underline" href="/contact">Contacto</a>
          </div>
        </nav>
      </div>
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
