import {extractResponseData} from '@src/actions/util';
import {sortRaces} from '../sort';

const responseData = {
  status: 200,
  data: {
    data: {
      next_to_go_ids: [
        '0bb0dccd-7f25-43fa-9c1e-ba74eb457d43',
        '12fa975c-5be3-4af0-910f-a43f8fcf851c',
      ],
      race_summaries: {
        '0bb0dccd-7f25-43fa-9c1e-ba74eb457d43': {
          race_id: '0bb0dccd-7f25-43fa-9c1e-ba74eb457d43',
          race_name: 'Local test 1',
          race_number: 6,
          meeting_id: '02146b8b-bdfc-4f0d-9c18-fae76ec93b8e',
          meeting_name: 'Testing local race 1',
          category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
          advertised_start: {seconds: 4},
          venue_id: '562f0f79-ecf3-4c04-805c-4d074ab7965e',
          venue_name: 'Northfield Park',
          venue_state: 'OH',
          venue_country: 'USA',
        },
        '12fa975c-5be3-4af0-910f-a43f8fcf851c': {
          race_id: '12fa975c-5be3-4af0-910f-a43f8fcf851c',
          race_name: 'Local test 2',
          race_number: 1,
          meeting_id: 'c2722001-9815-46bd-a2c0-d1efcc5ac988',
          meeting_name: 'Testing local race 2',
          category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
          advertised_start: {seconds: 1},
          venue_id: '83003f92-0356-4e49-90bf-2cdceb488487',
          venue_name: 'Ascot Park Extra Nz',
          venue_state: 'NZ',
          venue_country: 'NZ',
        },
        '13fa975c-5be3-4af0-910f-a43f8fcf851c': {
          race_id: '12fa975c-5be3-4af0-910f-a43f8fcf851c',
          race_name: 'Local test 2',
          race_number: 1,
          meeting_id: 'c2722001-9815-46bd-a2c0-d1efcc5ac988',
          meeting_name: 'Testing local race 2',
          category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
          advertised_start: {seconds: 3},
          venue_id: '83003f92-0356-4e49-90bf-2cdceb488487',
          venue_name: 'Ascot Park Extra Nz',
          venue_state: 'NZ',
          venue_country: 'NZ',
        },
        '14fa975c-5be3-4af0-910f-a43f8fcf851c': {
          race_id: '12fa975c-5be3-4af0-910f-a43f8fcf851c',
          race_name: 'Local test 2',
          race_number: 1,
          meeting_id: 'c2722001-9815-46bd-a2c0-d1efcc5ac988',
          meeting_name: 'Testing local race 2',
          category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
          advertised_start: {seconds: 5},
          venue_id: '83003f92-0356-4e49-90bf-2cdceb488487',
          venue_name: 'Ascot Park Extra Nz',
          venue_state: 'NZ',
          venue_country: 'NZ',
        },
      },
    },
    message: 'Next 10 races from each category',
  },
};

describe('Sort test', () => {
  test('Sort races', async () => {
    const races = extractResponseData(responseData);
    const sortedRaces = sortRaces(races);
    expect(sortedRaces.next[0]).toBe('12fa975c-5be3-4af0-910f-a43f8fcf851c');
  });

  test('Sort invalid races', async () => {
    const sortedRaces = sortRaces(null);
    expect(sortedRaces).toBe(null);
  });
});
