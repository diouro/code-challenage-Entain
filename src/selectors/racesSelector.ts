// types
import {rootState, RaceType} from '@src/types';

/**
 * Redux state selector for Race summaries
 * @param state
 * @returns array of Races
 */
export const selectRaceSummaries = (state: rootState): Array<RaceType> =>
  state?.races?.summaries || [];

/**
 * Redux state selector for next races
 * @param state
 * @returns array of next races
 */
export const selectRaceNext = (state: rootState): Array<string> =>
  state?.races?.next || [];

/**
 * Redux state selector for data loading
 * @param state
 * @returns
 */
export const selectLoading = (state: rootState): boolean => state?.loading;
