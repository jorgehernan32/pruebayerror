import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col text-black bg-teal-800 h-screen w-screen">
      <header className="top-0">
        <Header />
      </header>
        <main className="flex justify-center items-center">
          <h2 className="text-2xl font-bold mb-4">aquí irá el main</h2>
        </main>
      <footer className="bottom-0">
      <Footer />

      </footer>
      
    </div>
  );
}

export default App;
