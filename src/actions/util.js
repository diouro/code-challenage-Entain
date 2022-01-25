export const extractResponseData = response => {
  if (response) {
    const {status, data} = response;
    if ([200].includes(status) && data.data) {
      return data.data;
    }
  }
  return false;
};
