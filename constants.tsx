
import { Service, Client, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  phones: ['933-094-705', '933-095-258', '933-093-766'],
  emails: ['ventas@biosergesac.com', 'comercial@bioserge.com.pe'],
  website: 'https://bioserge.com.pe',
  resolution: 'EO-RS-00258-2023-MINAM/VMGA/DGGRS'
};

export const SERVICES: Service[] = [
  {
    title: 'Succión de Líquidos',
    description: 'Peligrosos y no peligrosos, lodos y semi sólidos.',
    icon: 'droplets'
  },
  {
    title: 'Recolección y Transporte',
    description: 'Gestión integral de residuos sólidos con unidades certificadas.',
    icon: 'truck'
  },
  {
    title: 'Saneamiento Ambiental',
    items: [
      'Desinfección',
      'Desinsectación',
      'Desratización',
      'Limpieza de Trampas de Grasa',
      'Limpieza de Cisternas',
      'Control Aviar'
    ],
    icon: 'shield-check'
  },
  {
    title: 'Disposición Final',
    description: 'Alternativas seguras para la disposición de residuos peligrosos.',
    icon: 'recycle'
  }
];

export const CLIENTS: Client[] = [
  { name: 'Tinka Resources', logo: 'https://picsum.photos/seed/tinka/200/100' },
  { name: 'AJE', logo: 'https://picsum.photos/seed/aje/200/100' },
  { name: 'San Martín', logo: 'https://picsum.photos/seed/sanmartin/200/100' },
  { name: 'Robocon', logo: 'https://picsum.photos/seed/robocon/200/100' },
  { name: 'Deli Bakery', logo: 'https://picsum.photos/seed/deli/200/100' },
  { name: 'Laive', logo: 'https://picsum.photos/seed/laive/200/100' },
  { name: 'Del Cielo', logo: 'https://picsum.photos/seed/delcielo/200/100' }
];

export const VALUES = [
  'Honestidad y lealtad',
  'Respeto por el medio ambiente',
  'Orden y puntualidad',
  'Trabajo en equipo',
  'Creatividad y cordialidad',
  'Profesionalismo e integridad'
];
