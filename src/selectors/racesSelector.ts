// types
import {rootState, Race} from '../types/tyles';

export const selectRaceSummaries = (state: rootState): Array<Race> | null =>
  state.races ? state.races.summaries : [];

export const selectRaceNext = (state: rootState): Array<string> | null =>
  state.races ? state.races.next : null;
