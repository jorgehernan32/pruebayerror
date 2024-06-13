import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-semibold text-black bg-teal-800">
      <header className="w-full">
        <Header />
      </header>
      <main className="flex-grow flex justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 text-white">aquí irá el main</h2>
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
