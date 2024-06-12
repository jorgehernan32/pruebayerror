import React from 'react';
import './App.css';
import Header from './Components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Bienvenido a mi aplicación</h2>
        <p>Esta es una aplicación de ejemplo creada con React y TypeScript.</p>
      </main>
    </div>
  );
}

export default App;