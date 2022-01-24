// Libraries
import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {};

export const raceReducer = createSlice({
  name: 'raceReducer',
  initialState,
  reducers: {
    setRaces: (state, action) => {
      state.races = action.payload;
    },
  }
})

export const { setRaces } = raceReducer.actions;

export default raceReducer.reducer;