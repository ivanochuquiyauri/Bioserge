
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
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="w-11 h-11 bg-brand-primary rounded-full flex items-center justify-center mr-3 shadow-lg">
              <span className="text-brand-accent text-2xl font-black italic">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand-primary leading-none tracking-tight">BIOSERGE</span>
              <span className="text-[10px] font-bold text-brand-secondary tracking-[0.2em]">S.A.C.</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 border-b-2 border-transparent hover:border-brand-secondary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-primary hover:bg-brand-light focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-600 hover:text-brand-primary hover:bg-brand-light px-3 py-3 rounded-md text-base font-bold"
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
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-brand-secondary/10 to-transparent hidden lg:block rounded-bl-[100px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-primary text-brand-accent text-xs font-bold uppercase tracking-widest mb-4 shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse"></span>
              <span>Res. Dir. {CONTACT_DATA.resolution}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] text-brand-shadow">
              Fomentando el <br />
              <span className="text-brand-primary">Desarrollo</span> <br />
              <span className="text-brand-secondary">Sostenible</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Gestión integral de residuos y saneamiento ambiental con los más altos estándares de calidad y compromiso ecológico.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contacto" className="px-10 py-4 bg-brand-primary text-white font-bold rounded-full shadow-xl hover:bg-brand-dark transition-all transform hover:scale-105 flex items-center justify-center">
                Cotizar Ahora <ChevronRight className="ml-2" size={20} />
              </a>
              <a href="#servicios" className="px-10 py-4 bg-white text-brand-primary border-2 border-brand-primary font-bold rounded-full hover:bg-brand-light transition-all flex items-center justify-center">
                Ver Portafolio
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-secondary rounded-full opacity-20 blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200" 
                alt="Bioserge Fleet" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brand-secondary tracking-[0.3em] uppercase mb-4">La Empresa</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-brand-primary">¿Quiénes Somos?</h3>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-brand-primary"></div>
            <div className="w-16 h-1 bg-brand-secondary"></div>
            <div className="w-16 h-1 bg-brand-accent"></div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] p-10 lg:p-20 shadow-2xl mb-24 border border-brand-secondary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full -mr-16 -mt-16"></div>
          <p className="text-xl text-slate-700 leading-relaxed text-center max-w-5xl mx-auto font-medium">
            <span className="text-brand-primary font-bold">BIOSERGE SAC</span>, somos una organización comprometida con la preservación del ecosistema. Ofrecemos soluciones logísticas avanzadas en recolección, transporte y disposición de residuos, operando con flota propia certificada para una respuesta ágil a nivel nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Misión */}
          <div className="group bg-white p-10 rounded-3xl shadow-lg border-b-8 border-brand-primary hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <Target size={32} />
            </div>
            <h4 className="text-2xl font-black text-brand-primary mb-6">Misión</h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              Especializarnos en la recolección, transporte y asesoría para disposición final, priorizando el reaprovechamiento y el cuidado del medio ambiente con un enfoque sostenible.
            </p>
          </div>

          {/* Visión */}
          <div className="group bg-white p-10 rounded-3xl shadow-lg border-b-8 border-brand-secondary hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mb-8 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
              <Eye size={32} />
            </div>
            <h4 className="text-2xl font-black text-brand-primary mb-6">Visión</h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              Consolidarnos como el referente nacional indiscutible en la gestión integral de residuos industriales, impulsando la economía circular.
            </p>
          </div>

          {/* Valores */}
          <div className="group bg-white p-10 rounded-3xl shadow-lg border-b-8 border-brand-accent hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-accent transition-colors">
              <Users size={32} />
            </div>
            <h4 className="text-2xl font-black text-brand-primary mb-6">Valores</h4>
            <ul className="space-y-4">
              {VALUES.map((val) => (
                <li key={val} className="flex items-center text-slate-700 font-bold text-sm">
                  <CheckCircle2 size={18} className="text-brand-secondary mr-3 flex-shrink-0" />
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
      case 'truck': return <Truck size={36} />;
      case 'shield-check': return <ShieldCheck size={36} />;
      case 'droplets': return <Droplets size={36} />;
      case 'recycle': return <Recycle size={36} />;
      default: return <ShieldCheck size={36} />;
    }
  };

  return (
    <section id="servicios" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brand-secondary tracking-[0.3em] uppercase mb-4">Soluciones Integrales</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-brand-primary">Servicios Especializados</h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Equipamiento tecnológico y personal altamente capacitado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group p-10 rounded-[2.5rem] bg-brand-light border border-slate-100 hover:bg-brand-primary transition-all duration-500 transform hover:-translate-y-3 shadow-sm hover:shadow-2xl">
              <div className="mb-8 text-brand-primary group-hover:text-brand-accent transition-colors">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-2xl font-black mb-5 group-hover:text-white transition-colors">{service.title}</h4>
              {service.description && (
                <p className="text-slate-600 font-medium leading-relaxed mb-6 group-hover:text-white/90 transition-colors">{service.description}</p>
              )}
              {service.items && (
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3 group-hover:bg-brand-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-32 p-12 bg-brand-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-brand-secondary/20 border-2 border-brand-secondary flex items-center justify-center mx-auto mb-8 font-black text-4xl text-brand-accent">01</div>
              <h5 className="text-2xl font-black mb-4">RECOLECCIÓN</h5>
              <p className="text-brand-light/80 font-medium">Equipos de protección y logística optimizada.</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-brand-secondary/20 border-2 border-brand-secondary flex items-center justify-center mx-auto mb-8 font-black text-4xl text-brand-accent">02</div>
              <h5 className="text-2xl font-black mb-4">TRANSPORTE</h5>
              <p className="text-brand-light/80 font-medium">Unidades con monitoreo GPS y seguros integrales.</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-brand-secondary/20 border-2 border-brand-secondary flex items-center justify-center mx-auto mb-8 font-black text-4xl text-brand-accent">03</div>
              <h5 className="text-2xl font-black mb-4">DISPOSICIÓN</h5>
              <p className="text-brand-light/80 font-medium">Certificación en rellenos autorizados.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Clients: React.FC = () => {
  return (
    <section id="clientes" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brand-secondary tracking-[0.3em] uppercase mb-4">Nuestra Red</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-brand-primary">Clientes que Confían</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-brand-secondary transition-all grayscale hover:grayscale-0">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 w-auto object-contain mb-4"
              />
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{client.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center bg-brand-primary rounded-3xl p-8 text-white font-black text-center shadow-xl hover:bg-brand-dark transition-colors cursor-pointer group">
            <span className="text-3xl text-brand-accent group-hover:scale-110 transition-transform mb-2">+</span>
            <span className="text-xs uppercase tracking-tighter">Únete a nosotros</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-5xl font-black text-brand-primary mb-10">Conectemos</h3>
            <p className="text-slate-600 mb-12 text-xl font-medium leading-relaxed">
              Transformamos tus desafíos ambientales en oportunidades de sostenibilidad. Nuestro equipo comercial responderá en menos de 24 horas.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-primary mb-2">Central de Atención</h4>
                  <div className="space-y-2">
                    {CONTACT_DATA.phones.map(p => (
                      <a key={p} href={`tel:${p.replace(/-/g, '')}`} className="block text-slate-700 font-bold hover:text-brand-secondary transition-colors text-lg">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-primary mb-2">Canal Digital</h4>
                  <div className="space-y-2">
                    {CONTACT_DATA.emails.map(e => (
                      <a key={e} href={`mailto:${e}`} className="block text-slate-700 font-bold hover:text-brand-secondary transition-colors text-lg">{e}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-primary group-hover:bg-brand-accent transition-all">
                  <Globe size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-brand-primary mb-2">Plataforma Web</h4>
                  <a href={CONTACT_DATA.website} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-bold hover:text-brand-secondary transition-colors text-lg">{CONTACT_DATA.website}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-light p-10 lg:p-14 rounded-[3.5rem] shadow-2xl border border-brand-secondary/10 relative">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary transform rotate-12 shadow-xl border-4 border-white">
              <span className="font-black text-sm">24/7</span>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Nombre Completo</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white/50" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Empresa / RUC</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white/50" placeholder="Razón Social" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Correo Corporativo</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white/50" placeholder="email@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Servicio Requerido</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white/50 appearance-none font-bold text-brand-primary">
                    <option>Gestión de Residuos Sólidos</option>
                    <option>Succión de Líquidos Industriales</option>
                    <option>Saneamiento de Plantas</option>
                    <option>Limpieza de Trampas de Grasa</option>
                    <option>Otros</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary">
                    <ChevronRight className="rotate-90" size={20} />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full py-5 bg-brand-primary text-white font-black text-lg rounded-2xl hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20 transform hover:-translate-y-1">
                SOLICITAR ASESORÍA
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
    <footer className="bg-brand-primary text-white py-20 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-accent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-xl">
                <span className="text-brand-primary font-black italic text-2xl">B</span>
              </div>
              <span className="text-3xl font-black tracking-tight">BIOSERGE <span className="text-brand-accent">S.A.C.</span></span>
            </div>
            <p className="text-brand-light/70 text-lg leading-relaxed max-w-md font-medium">
              Especialistas en ingeniería ambiental y gestión de residuos. Transformando residuos en recursos para un futuro más verde.
            </p>
          </div>
          <div>
            <h5 className="text-xl font-black mb-8 border-b-2 border-brand-secondary pb-2 inline-block">Navegación</h5>
            <ul className="space-y-4 font-bold text-brand-light/80">
              <li><a href="#inicio" className="hover:text-brand-accent transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-brand-accent transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-brand-accent transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-brand-accent transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-black mb-8 border-b-2 border-brand-secondary pb-2 inline-block">Legal</h5>
            <ul className="space-y-4 font-bold text-brand-light/80">
              <li>Res. MINAM {CONTACT_DATA.resolution}</li>
              <li>Política de Privacidad</li>
              <li>Términos y Condiciones</li>
              <li>Libro de Reclamaciones</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-brand-light/50 font-bold text-sm">
          <p>&copy; {new Date().getFullYear()} BIOSERGE S.A.C. - Todos los derechos reservados.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-brand-accent transition-all transform hover:scale-110">LINKEDIN</a>
            <a href="#" className="hover:text-brand-accent transition-all transform hover:scale-110">FACEBOOK</a>
            <a href="#" className="hover:text-brand-accent transition-all transform hover:scale-110">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-white">
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
