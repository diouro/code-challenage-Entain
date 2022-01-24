import { configureStore } from '@reduxjs/toolkit'
import raceReducer from './raceReducer'

export default configureStore({
    reducer: raceReducer
})