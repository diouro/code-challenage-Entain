// Libraries
import {createSlice} from '@reduxjs/toolkit';

// types
import {Race} from '../types/tyles';

const initialState = {};

type Action = {
  type: string;
  payload: Array<Race>;
};

export type rootState = {
  races: {
    summaries: Array<Race>;
    next: Array<string>;
  };
};

export const raceReducer = createSlice({
  name: 'raceReducer',
  initialState,
  reducers: {
    setRaces: (state: any, action: Action) => {
      state.races = action.payload;
    },
  },
});

export const {setRaces} = raceReducer.actions;

export default raceReducer.reducer;
