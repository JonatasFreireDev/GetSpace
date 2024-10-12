interface EventImage {
  id: number;
  name: string;
  image_url: string;
  thumbnail_url: string;
  credit: string;
  license: {
      id: number;
      name: string;
      priority: number;
      link: string;
  };
  single_use: boolean;
  variants: any[];
}

interface EventVideo {
  priority: number;
  source: string;
  publisher?: string | null;
  title: string;
  description: string;
  feature_image: string;
  url: string;
  type?: string | null;
  language: {
      id: number;
      name: string;
      code: string;
  };
  start_time?: string | null;
  end_time?: string | null;
  live: boolean;
}

interface EventInfoUrl {
  priority: number;
  source: string;
  title: string;
  description: string;
  feature_image?: string | null;
  url: string;
  type?: string | null;
  language: {
      id: number;
      name: string;
      code: string;
  };
}

interface EventType {
  id: number;
  name: string;
}

interface Event {
  id: number;
  url: string;
  name: string;
  info_urls: EventInfoUrl[];
  vid_urls: EventVideo[];
  image: EventImage;
  date: string;
  slug: string;
  type: EventType;
  description: string;
  webcast_live: boolean;
  location: string;
  date_precision?: string | null;
  response_mode: string;
  duration?: string | null;
  updates: any[];
  last_updated: string;
}

export interface EventResponse {
  count: number;
  next: string;
  previous?: string | null;
  results: Event[];
}
