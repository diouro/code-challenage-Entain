// Libraries
import {createSlice} from '@reduxjs/toolkit';

// types
import {Races} from '../types/tyles';

const initialState = {};

type Action = {
  type: string;
  payload: Races;
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
