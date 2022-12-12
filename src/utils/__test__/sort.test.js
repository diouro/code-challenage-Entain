// Utils
import {extractResponseData} from '@src/actions';
import {sortRaces} from '../sort';

// Mock
import {sortMocked} from './sort.mock';

describe('Sort test', () => {
  test('Sort races', async () => {
    const races = extractResponseData(sortMocked);
    const sortedRaces = sortRaces(races);
    expect(sortedRaces.next[0]).toBe('12fa975c-5be3-4af0-910f-a43f8fcf851c');
  });

  test('Sort invalid races', async () => {
    const sortedRaces = sortRaces(null);
    expect(sortedRaces).toBe(null);
  });
});
