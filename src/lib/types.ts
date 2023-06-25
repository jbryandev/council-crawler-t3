export interface Agency {
  id: number;
  name: string;
  slug: string;
}

export interface Agenda {
  id: number;
  agencyId: number;
  date: Date;
  url: string;
  content: string;
}

export interface Highlight {
  id: number;
  agendaId: number;
  content: string;
}
