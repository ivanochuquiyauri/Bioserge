
export interface Service {
  title: string;
  description?: string;
  items?: string[];
  icon: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface ContactInfo {
  phones: string[];
  emails: string[];
  website: string;
  resolution: string;
}
