export interface LaunchResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Launch[];
}

export interface Launch {
  id: string;
  name: string;
  status: LaunchStatus;
  net: string;
  window_start: string;
  window_end: string;
  launch_service_provider: LaunchServiceProvider;
  rocket: Rocket;
  mission: Mission;
  pad: LaunchPad;
  webcast_live: boolean;
}

export interface LaunchStatus {
  name: string;
  abbrev: string;
  description: string;
}

export interface LaunchServiceProvider {
  name: string;
  abbrev: string;
  type: LaunchProviderType;
}

export interface LaunchProviderType {
  name: string;
}

export interface Rocket {
  configuration: RocketConfiguration;
}

export interface RocketConfiguration {
  full_name: string;
  variant: string;
}

export interface Mission {
  name: string;
  type: string;
  description: string;
  orbit: MissionOrbit;
}

export interface MissionOrbit {
  name: string;
  celestial_body: CelestialBody;
}

export interface CelestialBody {
  name: string;
}

export interface LaunchPad {
  name: string;
  map_url: string;
  latitude: number;
  longitude: number;
  country: Country;
}

export interface Country {
  name: string;
}
