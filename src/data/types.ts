export interface WorkEntry {
  name: string;
  position: string;
  startDate: string;
  endDate?: string;
  url?: string;
  summary?: string;
}

export interface WorkData {
  $schema: string;
  work: WorkEntry[];
}

export interface Location {
  city: string;
  region: string;
  countryCode: string;
}

export interface Profile {
  network: string;
  url: string;
  username: string;
}

export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface AboutData {
  $schema: string;
  basics: Basics;
}
