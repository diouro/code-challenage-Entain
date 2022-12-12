// Types
import {RacesResponse} from '@src/types';

interface Response {
  status: number;
  data: any;
}

/**
 * Method help to extract the response from axios response
 * @param {*} response
 * @returns extracted data from response
 */
export const extractResponseData = (
  response: Response,
): RacesResponse | null => {
  if (response) {
    const {status, data} = response;
    if ([200].includes(status) && data.data) {
      return data.data;
    }
  }
  return null;
};
