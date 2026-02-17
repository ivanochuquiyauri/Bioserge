
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Globe, 
  Truck, 
  ShieldCheck, 
  Droplets, 
  Recycle, 
  ChevronRight, 
  CheckCircle2,
  Users,
  Target,
  Eye
} from 'lucide-react';
import { CONTACT_DATA, SERVICES, CLIENTS, VALUES } from './constants';

// --- Helper Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-yellow-400 text-xl font-bold">B</span>
            </div>
            <span className="text-2xl font-bold text-green-800 tracking-tight">BIOSERGE S.A.C</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-600 hover:text-green-600 hover:bg-slate-50 px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
              <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
              <span>Res. Dir. {CONTACT_DATA.resolution}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-tight">
              Fomentando el <span className="text-green-600">Desarrollo Sostenible</span> Ambiental
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Brindamos servicios integrales de recolección, transporte y disposición final de residuos industriales con flota propia certificada.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contacto" className="px-8 py-4 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center">
                Solicitar Cotización <ChevronRight className="ml-2" size={20} />
              </a>
              <a href="#servicios" className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 font-bold rounded-lg hover:bg-green-50 transition-all flex items-center justify-center">
                Ver Servicios
              </a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/seed/bioserge/800/600" 
              alt="Bioserge Fleet" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video sm:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-2">Conócenos</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">¿Quiénes Somos?</h3>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-20 border border-slate-100">
          <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
            BIOSERGE SAC, somos una empresa que brinda servicios integrales comprometidos con el medio ambiente, mediante sus procesos de recolección transporte y disposición final de residuos sólidos y líquidos de la industria, minería, salud y colectivos. Contamos con una flota de vehículos propios que nos permite atender de manera inmediata la demanda de nuestros clientes a nivel nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mision */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-green-600">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
              <Target size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Misión</h4>
            <p className="text-slate-600 leading-relaxed">
              Especializarnos en la recolección, transporte y asesoría para disposición final, priorizando el reaprovechamiento y el cuidado del medio ambiente con un enfoque sostenible.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-400">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 text-yellow-600">
              <Eye size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Visión</h4>
            <p className="text-slate-600 leading-relaxed">
              Continuar siendo la empresa líder en la gestión integral de residuos peligrosos y no peligrosos a nivel nacional.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-green-600">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
              <Users size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Valores</h4>
            <ul className="space-y-2">
              {VALUES.map((val) => (
                <li key={val} className="flex items-center text-slate-600">
                  <CheckCircle2 size={16} className="text-green-500 mr-2" />
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'truck': return <Truck size={32} />;
      case 'shield-check': return <ShieldCheck size={32} />;
      case 'droplets': return <Droplets size={32} />;
      case 'recycle': return <Recycle size={32} />;
      default: return <ShieldCheck size={32} />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-2">Especialistas</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Nuestros Servicios</h3>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-slate-50 hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-xl">
              <div className="mb-6 text-green-600 group-hover:text-white transition-colors">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              {service.description && (
                <p className="text-sm opacity-90 leading-relaxed mb-4">{service.description}</p>
              )}
              {service.items && (
                <ul className="text-xs space-y-1 opacity-80">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-1 h-1 bg-current rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20 pt-20 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 font-bold text-2xl">01</div>
              <h5 className="font-bold text-lg mb-2">Recolección</h5>
              <p className="text-sm text-slate-500">Con EPPs certificados</p>
            </div>
            <div className="hidden md:block">
              <div className="h-0.5 bg-slate-200 w-full relative">
                <ChevronRight className="absolute -right-2 -top-2.5 text-slate-300" size={24} />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 font-bold text-2xl">02</div>
              <h5 className="font-bold text-lg mb-2">Transporte</h5>
              <p className="text-sm text-slate-500">Unidades certificadas</p>
            </div>
            <div className="hidden md:block">
              <div className="h-0.5 bg-slate-200 w-full relative">
                <ChevronRight className="absolute -right-2 -top-2.5 text-slate-300" size={24} />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4 font-bold text-2xl">03</div>
              <h5 className="font-bold text-lg mb-2">Disposición Final</h5>
              <p className="text-sm text-slate-500">Gestión responsable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Clients: React.FC = () => {
  return (
    <section id="clientes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-2">Confianza</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Nuestros Clientes</h3>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 p-4 bg-white rounded-xl shadow-sm">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-12 w-auto object-contain"
                title={client.name}
              />
            </div>
          ))}
          <div className="flex flex-col items-center justify-center bg-green-600 rounded-xl p-4 text-white font-bold text-center">
            <span className="text-xl">¡TÚ!</span>
            <span className="text-[10px] uppercase tracking-tighter">Próximo Cliente</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Contáctanos</h3>
            <p className="text-slate-600 mb-8 text-lg">
              Estamos listos para atender tus requerimientos de gestión ambiental en todo el territorio nacional.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Teléfonos</h4>
                  <div className="space-y-1">
                    {CONTACT_DATA.phones.map(p => (
                      <a key={p} href={`tel:${p.replace(/-/g, '')}`} className="block text-slate-600 hover:text-green-600">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-green-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Correos Electrónicos</h4>
                  <div className="space-y-1">
                    {CONTACT_DATA.emails.map(e => (
                      <a key={e} href={`mailto:${e}`} className="block text-slate-600 hover:text-green-600">{e}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-green-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sitio Web</h4>
                  <a href={CONTACT_DATA.website} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-green-600">{CONTACT_DATA.website}</a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-semibold text-slate-400 uppercase mb-2">Certificación Oficial</p>
              <p className="text-green-700 font-bold">{CONTACT_DATA.resolution}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl shadow-lg border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Empresa</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="Mi Empresa S.A." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="juan@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Servicio de Interés</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all appearance-none bg-white">
                  <option>Recolección de Residuos</option>
                  <option>Saneamiento Ambiental</option>
                  <option>Succión de Líquidos</option>
                  <option>Otros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Cuéntanos sobre tu necesidad..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-yellow-400 font-bold">B</span>
              </div>
              <span className="text-xl font-bold">BIOSERGE S.A.C</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
              Comprometidos con el desarrollo sostenible ambiental a nivel nacional.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-green-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-green-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-green-500 transition-colors">Instagram</a>
          </div>
          <div className="text-slate-400 text-sm md:text-right">
            <p>&copy; {new Date().getFullYear()} BIOSERGE S.A.C.</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
