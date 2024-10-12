export interface AstronautsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Astronaut[];
}

interface Astronaut {
  id: number;
  url: string;
  name: string;
  status: Status;
  agency: Agency;
  image: Image;
  response_mode: string;
  type: Type;
  in_space: boolean;
  time_in_space: string;
  eva_time: string;
  age: number;
  date_of_birth: string;
  date_of_death: string | null;
  nationality: Nationality[];
  bio: string;
  wiki: string;
  last_flight: string;
  first_flight: string;
  social_media_links: SocialMediaLink[];
  flights_count: number;
  landings_count: number;
  spacewalks_count: number;
}

interface Status {
  id: number;
  name: string;
}

interface Agency {
  response_mode: string;
  id: number;
  url: string;
  name: string;
  abbrev: string;
  type: Type;
}

interface Image {
  id: number;
  name: string;
  image_url: string;
  thumbnail_url: string;
  credit: string | null;
  license: License;
  single_use: boolean;
  variants: any[];
}

interface License {
  id: number;
  name: string;
  priority: number;
  link: string | null;
}

interface Type {
  id: number;
  name: string;
}

interface Nationality {
  id: number;
  name: string;
  alpha_2_code: string;
  alpha_3_code: string;
  nationality_name: string;
  nationality_name_composed: string;
}

interface SocialMediaLink {
  id: number;
  social_media: SocialMedia;
  url: string;
}

interface SocialMedia {
  id: number;
  name: string;
  url: string;
  logo: string | null;
}
