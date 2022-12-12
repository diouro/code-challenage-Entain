// Libraries
import {createSlice} from '@reduxjs/toolkit';

// types
import {Races} from '@src/types';

// Initial state
export const initialState = {
  races: [],
  loading: true,
};

// Action type
interface Action {
  type: string;
  payload: Races | boolean;
}

export const raceReducer = createSlice({
  name: 'raceReducer',
  initialState,
  reducers: {
    setRaces: (state: any, action: Action) => ({
      ...state,
      races:
        state.races.length > 0
          ? [...state.races, action.payload]
          : action.payload,
    }),
    setLoading: (state: any, action: Action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const {setRaces, setLoading} = raceReducer.actions;

export default raceReducer.reducer;
