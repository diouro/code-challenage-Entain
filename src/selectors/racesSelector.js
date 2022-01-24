// Libraries
import { createSelector } from 'reselect';

export const selectRaces = (state) => {
    return state.races || null;
}