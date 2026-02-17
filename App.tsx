
import React, { useState, useEffect } from 'react';
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
  Eye,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import { CONTACT_DATA, SERVICES, CLIENTS, VALUES } from './constants';

// --- Helper Components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { 
      name: 'Servicios', 
      href: '#servicios',
      isDropdown: true,
      subItems: SERVICES.map(s => ({ name: s.title, href: `#service-${s.title.toLowerCase().replace(/\s+/g, '-')}` }))
    },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-11 h-11 bg-brand-primary rounded-full flex items-center justify-center mr-3 shadow-lg transform hover:scale-110 transition-transform">
              <span className="text-brand-accent text-2xl font-black italic">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-brand-primary leading-none tracking-tight">BIOSERGE</span>
              <span className="text-[10px] font-bold text-brand-secondary tracking-[0.2em]">S.A.C.</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {menuItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.isDropdown && setServicesDropdownOpen(true)}
                  onMouseLeave={() => item.isDropdown && setServicesDropdownOpen(false)}
                >
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 flex items-center group"
                  >
                    {item.name}
                    {item.isDropdown && <ChevronDown className={`ml-1 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} size={16} />}
                  </a>
                  
                  {item.isDropdown && servicesDropdownOpen && (
                    <div className="absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.subItems?.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-slate-600 hover:bg-brand-light hover:text-brand-primary font-medium transition-colors border-l-4 border-transparent hover:border-brand-secondary"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
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
        <div className="md:hidden bg-white border-t border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top duration-300 overflow-y-auto max-h-[90vh]">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  onClick={() => !item.isDropdown && setIsOpen(false)}
                  className="flex justify-between items-center text-slate-700 hover:text-brand-primary hover:bg-brand-light px-3 py-4 rounded-md text-base font-bold"
                >
                  {item.name}
                </a>
                {item.isDropdown && (
                  <div className="pl-6 space-y-1 bg-slate-50 rounded-lg py-2">
                    {item.subItems?.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-3 text-sm text-slate-600 font-semibold"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/51${CONTACT_DATA.phones[0].replace(/-/g, '')}`;
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
        ¡Contáctanos por WhatsApp!
        <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white border-b border-r border-slate-100 rotate-45"></div>
      </div>
      <MessageCircle size={32} />
    </a>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-brand-secondary/20 via-brand-light to-transparent hidden lg:block rounded-bl-[100px]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full brand-gradient text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span>Res. Dir. {CONTACT_DATA.resolution}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] text-brand-shadow">
              Fomentando el <br />
              <span className="text-brand-primary">Desarrollo</span> <br />
              <span className="text-brand-secondary bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Sostenible</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Gestión integral de residuos y saneamiento ambiental con tecnología de punta y compromiso ecológico real.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contacto" className="px-10 py-4 brand-gradient text-white font-bold rounded-full shadow-xl hover:shadow-brand-primary/40 transition-all transform hover:scale-105 flex items-center justify-center">
                Cotizar Ahora <ChevronRight className="ml-2" size={20} />
              </a>
              <a href="#servicios" className="px-10 py-4 bg-white text-brand-primary border-2 border-brand-primary font-bold rounded-full hover:bg-brand-light transition-all flex items-center justify-center">
                Servicios <ChevronDown className="ml-2" size={18} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-secondary rounded-full opacity-10 blur-3xl animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 group">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Bioserge Environment" 
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs font-black uppercase tracking-widest text-brand-accent">Compromiso</p>
                <p className="text-lg font-bold">Respeto por el medio ambiente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
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
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors shadow-inner">
              <Target size={32} />
            </div>
            <h4 className="text-2xl font-black text-brand-primary mb-6">Misión</h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              Especializarnos en la recolección, transporte y asesoría para disposición final, priorizando el reaprovechamiento y el cuidado del medio ambiente con un enfoque sostenible.
            </p>
          </div>

          {/* Visión */}
          <div className="group bg-white p-10 rounded-3xl shadow-lg border-b-8 border-brand-secondary hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mb-8 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors shadow-inner">
              <Eye size={32} />
            </div>
            <h4 className="text-2xl font-black text-brand-primary mb-6">Visión</h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              Consolidarnos como el referente nacional indiscutible en la gestión integral de residuos industriales, impulsando la economía circular.
            </p>
          </div>

          {/* Valores */}
          <div className="group bg-white p-10 rounded-3xl shadow-lg border-b-8 border-brand-accent hover:-translate-y-2 transition-transform">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-accent transition-colors shadow-inner">
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
    <section id="servicios" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-brand-secondary tracking-[0.3em] uppercase mb-4">Soluciones Integrales</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-brand-primary">Servicios Especializados</h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Equipamiento tecnológico y personal altamente capacitado bajo normativas internacionales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-10 rounded-[2.5rem] bg-brand-light border border-slate-100 hover:brand-gradient transition-all duration-500 transform hover:-translate-y-3 shadow-sm hover:shadow-2xl scroll-mt-24"
            >
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
                    <li key={i} className="flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3 group-hover:bg-brand-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 pt-6 border-t border-slate-200 group-hover:border-white/20">
                <a href="#contacto" className="text-xs font-black uppercase tracking-widest text-brand-primary group-hover:text-brand-accent flex items-center">
                  Saber más <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow with Gradient */}
        <div className="mt-32 p-12 brand-gradient rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mx-auto mb-8 font-black text-4xl text-brand-accent transform group-hover:scale-110 transition-transform">01</div>
              <h5 className="text-2xl font-black mb-4">RECOLECCIÓN</h5>
              <p className="text-brand-light/80 font-medium">Equipos de protección y logística optimizada para cada tipo de residuo.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mx-auto mb-8 font-black text-4xl text-brand-accent transform group-hover:scale-110 transition-transform">02</div>
              <h5 className="text-2xl font-black mb-4">TRANSPORTE</h5>
              <p className="text-brand-light/80 font-medium">Unidades equipadas con GPS, control de derrames y seguros integrales.</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mx-auto mb-8 font-black text-4xl text-brand-accent transform group-hover:scale-110 transition-transform">03</div>
              <h5 className="text-2xl font-black mb-4">DISPOSICIÓN</h5>
              <p className="text-brand-light/80 font-medium">Certificación oficial en rellenos sanitarios y de seguridad autorizados.</p>
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
          <h3 className="text-4xl sm:text-5xl font-black text-brand-primary">Aliados Estratégicos</h3>
          <p className="mt-4 text-slate-500">Empresas líderes que confían en nuestra gestión ambiental.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-brand-secondary transition-all grayscale hover:grayscale-0 transform hover:-translate-y-1">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 w-auto object-contain mb-4"
              />
              <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest text-center">{client.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center brand-gradient rounded-3xl p-8 text-white font-black text-center shadow-xl hover:shadow-brand-primary/30 transition-all cursor-pointer group transform hover:-translate-y-1">
            <span className="text-3xl text-brand-accent group-hover:scale-125 transition-transform mb-2">+</span>
            <span className="text-xs uppercase tracking-tighter">Únete a nuestra red</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-5xl font-black text-brand-primary mb-10">Conectemos</h3>
            <p className="text-slate-600 mb-12 text-xl font-medium leading-relaxed">
              Transformamos tus desafíos ambientales en procesos eficientes y sostenibles. Nuestro equipo experto está listo para asesorarte.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-primary group-hover:brand-gradient group-hover:text-white transition-all shadow-sm">
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
                <div className="w-16 h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-secondary group-hover:brand-gradient group-hover:text-white transition-all shadow-sm">
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
                <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 text-brand-primary group-hover:brand-gradient group-hover:text-white transition-all shadow-sm">
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
            <div className="absolute -top-6 -right-6 w-24 h-24 brand-gradient rounded-full flex flex-col items-center justify-center text-white transform rotate-12 shadow-xl border-4 border-white">
              <span className="font-black text-xs uppercase">Rápida</span>
              <span className="font-black text-lg">Respuesta</span>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Nombre Completo</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Empresa / RUC</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white" placeholder="Razón Social" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Correo Corporativo</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white" placeholder="email@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-black text-brand-primary mb-3 uppercase tracking-widest">Servicio Requerido</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl border-2 border-white focus:border-brand-secondary outline-none transition-all shadow-inner bg-white appearance-none font-bold text-brand-primary">
                    {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                    <option>Otros requerimientos</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary">
                    <ChevronDown size={20} />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full py-5 brand-gradient text-white font-black text-lg rounded-2xl hover:shadow-brand-primary/40 transition-all shadow-xl transform hover:-translate-y-1">
                SOLICITAR ASESORÍA TÉCNICA
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
              Líderes en ingeniería ambiental y gestión integral de residuos. Transformamos desafíos en soluciones sostenibles para el Perú.
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
              <li>Res. MINAM: {CONTACT_DATA.resolution}</li>
              <li>Política de Sostenibilidad</li>
              <li>Seguridad y Salud (SST)</li>
              <li>Cumplimiento Normativo</li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-brand-light/50 font-bold text-sm">
          <p>&copy; {new Date().getFullYear()} BIOSERGE S.A.C. - Ingeniería Ambiental Responsable.</p>
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
  // Simple scroll spy effect could be added here if needed
  
  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-white bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
