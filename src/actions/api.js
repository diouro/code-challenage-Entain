// Libraries
import axios from 'axios';

// Constants
import {URL_RACE_LIST} from '../constants/endpoint';

// Reduce
import {setRaces} from '../reducer/raceReducer';

// Utils
import {sortRaces} from '../utils/sort';
import {extractResponseData} from './util';

export const getRaces =
  () =>
  async (dispatch: Dispatch): void => {
    try {
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
        dispatch(setRaces(sortRaces(data)));
      }
    } catch (error) {
      // ignore for now
    }
  };
