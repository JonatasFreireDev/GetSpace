interface Image {
  id: number;
  name: string;
  image_url: string;
  thumbnail_url: string;
  credit: string | undefined;
  license: License;
  single_use: boolean;
  variants: any[];
}

interface License {
  id: number;
  name: string;
  priority: number;
  link: string | undefined;
}

interface Status {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
  alpha_2_code: string;
  alpha_3_code: string;
  nationality_name: string;
  nationality_name_composed: string;
}

interface AgencyType {
  id: number;
  name: string;
}

interface Agency {
  response_mode: string;
  id: number;
  url: string;
  name: string;
  abbrev: string;
  type: AgencyType;
  featured: boolean;
  country: Country[];
  description: string;
  administrator: string;
  founding_year: number;
  launchers: string;
  spacecraft: string;
  parent: string | undefined;
  image: Image;
  logo: Image;
  social_logo: Image;
}

interface StationType {
  id: number;
  name: string;
}

export interface SpaceStation {
  id: number;
  url: string;
  name: string;
  image: Image;
  status: Status;
  founded: string;
  deorbited: string | undefined;
  description: string;
  orbit: string;
  type: StationType;
  owners: Agency[];
  response_mode: string;
  active_expeditions: any[];
}

export interface SpaceStationsResponse {
  count: number;
  next: string;
  previous: string | undefined;
  results: SpaceStation[];
}
