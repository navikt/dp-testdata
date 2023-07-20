export interface ParticipatingService {
  id: string;
  time: string;
  service: string;
  instance: string;
  image: string;
}

export interface Tracing {
  id: string;
  opprettet: string;
  event_name: string;
  behov?: string[];
}

export interface RapidEnvelope extends Record<string, any> {
  "@id": string;
  "@event_name": string;
  "@opprettet": string;
  "@forårsaket_av": Tracing;
  system_read_count: number;
  system_participating_services: ParticipatingService[];
}

export interface BehovEnvelope extends RapidEnvelope {
  "@behov": string[];
  "@behovId": string;
  "@løsning"?: any;
}
