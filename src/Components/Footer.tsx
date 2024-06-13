
const Footer = () => {
return (
    <footer className="bg-gray-800 py-8 m-4">
    <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div>
            <h3 className="text-xl font-bold mb-2 text-white">NAVEGACIÓN</h3>
            <ul className="text-sm text-white mb-4">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            </div>
        <div className="text-white mt-4">
            <p className="mb-4">Footer prueba y error</p>
            <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="mb-4">IDYGS91 2024 Ame</p>
        </div>
        <div>
        </div>
        </div>
    </div>
    </footer>
);
}

export default Footer;

