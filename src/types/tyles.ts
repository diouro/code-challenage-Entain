export interface RacesResponse {
  next_to_go_ids: Array<string>;
  race_summaries: Array<Race>;
}

export interface Race {
  meeting_name: string;
  race_number: number;
  category_id: string;
  race_id: string;
  advertised_start: {
    seconds: number;
  };
}

export type Races = {
  summaries: Array<Race>;
  next: Array<string>;
};

export type rootState = {
  races: Races;
  loading: boolean;
};
