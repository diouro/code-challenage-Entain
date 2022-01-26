/**
 * Method help to extract the response from axios response
 * @param {*} response
 * @returns extracted data from response
 */
export const extractResponseData = (response: object): ?object => {
  if (response) {
    const {status, data} = response;
    if ([200].includes(status) && data.data) {
      return data.data;
    }
  }
  return false;
};
