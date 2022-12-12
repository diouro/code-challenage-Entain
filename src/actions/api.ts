// Libraries
import {Action} from '@reduxjs/toolkit';
import axios from 'axios';
import {Dispatch} from 'react';

// Constants
import {URL_RACE_LIST} from '@src/constants/endpoint';

// Reduce
import {setLoading, setRaces} from '@src/reducer/raceReducer';

// Utils
import {sortRaces} from '@src/utils/sort';
import {extractResponseData} from './util';

/**
 * Fetch list of races from Neds api and load the data to redux
 */
export const getRaces =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      // Update hook loading state
      dispatch(setLoading(true));

      const params = {
        method: 'nextraces',
        count: 10,
      };

      // Get races
      const response = await axios.get(URL_RACE_LIST, {
        headers: {
          'Content-Type': 'application/json',
        },
        params,
      });

      // Dispatch result to redux
      const data = extractResponseData(response);
      if (data) {
        const sortedData = sortRaces(data);
        dispatch(setRaces(sortedData));
      }
    } catch (error) {
      // ignore for now
    }

    // Update hook loading state
    dispatch(setLoading(false));
  };
