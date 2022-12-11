// Libraries
import {createSlice} from '@reduxjs/toolkit';

// types
import {Races} from '@src/types/tyles';

export const initialState = {
  races: null,
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
      races: action.payload,
    }),
    setLoading: (state: any, action: Action) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const {setRaces, setLoading} = raceReducer.actions;

export default raceReducer.reducer;
