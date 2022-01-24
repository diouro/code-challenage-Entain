import { extractResponseData } from './util';

describe('Util test', () => {
  test('test can extract data', () => {
    const response = {
        status: 200,
        data: {
            data: {
                test: 'success'
            }
        }
    };
    expect(extractResponseData(response)).toBe(response.data.data);
  });

  test('test fail with invalid code', () => {
    const response = {
        status: 404,
    };
    expect(extractResponseData(response)).toBe(false);
  });

  test('test fail invalid data', () => {
    const response = {
        status: 200,
        data: {
            result: {
                test: 'success'
            }
        }
    };
    expect(extractResponseData(response)).toBe(false);
  });


});