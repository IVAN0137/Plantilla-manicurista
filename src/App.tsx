import { Heart, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Card } from "@/components/ui/card";


const services = [
  {
    id: 1,
    title: "Manicura Clásica",
    price: "$25",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800",
    description: "Limado, cutículas y esmalte tradicional"
  },
  {
    id: 2,
    title: "Manicura Gel",
    price: "$35",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800",
    description: "Duración extendida con esmalte en gel"
  },
  {
    id: 3,
    title: "Diseños Artísticos",
    price: "$45",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa4576b?q=80&w=800",
    description: "Arte personalizado en tus uñas"
  },
  {
    id: 4,
    title: "Pedicura Spa",
    price: "$40",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800",
    description: "Tratamiento completo para pies"
  }
];

const whatsappNumber = "+524412822828"; // Reemplázalo con tu número de WhatsApp real
const whatsappMessage = "Hola! Me gustaría hacer una reservación para un servicio de uñas.";

function App() {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
        aria-label="Reservar por WhatsApp"
      >
        {/* SVG de WhatsApp */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.23 18.13l-3.17-3.17a7.75 7.75 0 10-1.41 1.41l3.17 3.17a1 1 0 001.41-1.41zM10 14a4 4 0 114-4 4 4 0 01-4 4z" />
        </svg>
      </button>

      {/* Hero Section */}
      <header className="relative h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1610992015734-11c37ee1ff8b?q=80&w=1200" 
          alt="Nail salon hero"
          className="w-full h-full object-cover scale-105 transition-transform duration-[3s] hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-6xl font-bold mb-4 font-serif animate-float">Bella Nails</h1>
            <p className="text-2xl mb-8 opacity-90">Tu belleza en nuestras manos</p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-pink-500 hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg shine-effect"
            >
              Reserva ahora por WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        {/* Services Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-serif text-center mb-16 text-gray-800 animate-fade-in">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="card-hover overflow-hidden bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-pink-500 font-bold text-lg">{service.price}</p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full mt-4 bg-pink-500 hover:bg-pink-600 transition-all duration-300"
                  >
                    Reservar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24 text-center">
          <h2 className="text-4xl font-serif mb-16 text-gray-800 animate-fade-in">
            Por qué elegirnos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg card-hover">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-float" />
              <h3 className="text-2xl font-semibold mb-4">Atención Personalizada</h3>
              <p className="text-gray-600">Cuidamos cada detalle para tu satisfacción</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg card-hover">
              <svg
                className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-float"
                style={{ animationDelay: '0.2s' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Productos Premium</h3>
              <p className="text-gray-600">Utilizamos las mejores marcas del mercado</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg card-hover">
              <svg
                className="w-16 h-16 text-pink-500 mx-auto mb-6 animate-float"
                style={{ animationDelay: '0.4s' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-4">Horarios Flexibles</h3>
              <p className="text-gray-600">Adaptados a tu disponibilidad</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-12 text-gray-800 animate-fade-in">
              Contáctanos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center card-hover p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                <Phone className="w-10 h-10 text-pink-500 mb-6 animate-float" />
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
              <div className="flex flex-col items-center card-hover p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                <MapPin className="w-10 h-10 text-pink-500 mb-6 animate-float" style={{ animationDelay: '0.2s' }} />
                <p className="text-gray-600">123 Beauty Street, City</p>
              </div>
              <div className="flex flex-col items-center card-hover p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                <Instagram className="w-10 h-10 text-pink-500 mb-6 animate-float" style={{ animationDelay: '0.4s' }} />
                <p className="text-gray-600">@bellanails</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Bella Nails. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
