export interface RaceType {
  [key: string]: RaceProps;
}

export interface RaceProps {
  meeting_name: string;
  race_number: number;
  category_id: string;
  race_id: string;
  advertised_start: {
    seconds: number;
  };
}

export interface RacesResponse {
  next_to_go_ids: Array<string>;
  race_summaries: Array<RaceType>;
}

export interface Races {
  summaries: Array<RaceType>;
  next: Array<string>;
}

// Root state type
export interface rootState {
  races: Races;
  loading: boolean;
}
