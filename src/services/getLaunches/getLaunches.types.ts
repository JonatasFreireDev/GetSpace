export interface LaunchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Launch[];
}

interface Launch {
  id: string;
  url: string;
  name: string;
  response_mode: string;
  slug: string;
  launch_designator: string;
  status: LaunchStatus;
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  image: LaunchImage;
  launch_service_provider: LaunchServiceProvider;
  rocket: Rocket;
  mission: Mission;
  pad: LaunchPad;
  webcast_live: boolean;
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
}

interface LaunchStatus {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

interface LaunchImage {
  id: number;
  name: string;
  image_url: string;
  thumbnail_url: string;
  credit: string | null;
  license: License;
  single_use: boolean;
}

interface License {
  id: number;
  name: string;
  priority: number;
  link: string | null;
}

interface LaunchServiceProvider {
  response_mode: string;
  id: number;
  url: string;
  name: string;
  abbrev: string;
  type: LaunchProviderType;
}

interface LaunchProviderType {
  id: number;
  name: string;
}

interface Rocket {
  id: number;
  configuration: RocketConfiguration;
}

interface RocketConfiguration {
  response_mode: string;
  id: number;
  url: string;
  name: string;
  families: RocketFamily[];
  full_name: string;
  variant: string;
}

interface RocketFamily {
  response_mode: string;
  id: number;
  name: string;
}

interface Mission {
  id: number;
  name: string;
  type: string;
  description: string;
  orbit: MissionOrbit;
}

interface MissionOrbit {
  id: number;
  name: string;
  abbrev: string;
  celestial_body: CelestialBody;
}

interface CelestialBody {
  response_mode: string;
  id: number;
  name: string;
}

interface LaunchPad {
  id: number;
  url: string;
  active: boolean;
  name: string;
  map_url: string;
  latitude: number;
  longitude: number;
  country: Country;
}

interface Country {
  id: number;
  name: string;
  alpha_2_code: string;
  alpha_3_code: string;
  nationality_name: string;
  nationality_name_composed: string;
}
