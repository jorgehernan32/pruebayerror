import Header from './Components/Header';
import Footer from './Components/Footer';
const App: React.FC = () => {
  return (
    <div className="bg-slate-600">
      <Header />
      <main>
        <h2 className='bg-green-600'>Bienvenido a mi aplicación</h2>
        <p>Tanto Georgeeee.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;