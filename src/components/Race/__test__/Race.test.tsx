import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import Race from '../Race';

const mockedRace = {
  race_id: '0bb0dccd-7f25-43fa-9c1e-ba74eb457d43',
  race_name: 'Race 6 - 1609M',
  race_number: 6,
  meeting_id: '02146b8b-bdfc-4f0d-9c18-fae76ec93b8e',
  meeting_name: 'Northfield Park',
  category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b',
  advertised_start: {
    seconds: 1670723340,
  },
  race_form: {
    distance: 1609,
    distance_type: {
      id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
      name: 'Metres',
      short_name: 'm',
    },
    distance_type_id: '570775ae-09ec-42d5-989d-7c8f06366aa7',
    track_condition: {
      id: '1db9cab0-b747-11ea-80cf-6a390f79827e',
      name: 'Fast',
      short_name: 'fast',
    },
    track_condition_id: '1db9cab0-b747-11ea-80cf-6a390f79827e',
    weather: {
      id: '5ba75165-3cec-11eb-88bb-36fbfdf5d97f',
      name: 'OCAST',
      short_name: 'ocast',
      icon_uri: 'OCAST',
    },
    weather_id: '5ba75165-3cec-11eb-88bb-36fbfdf5d97f',
    additional_data:
      '{"revealed_race_info":{"track_name":"Northfield Park","state":"OH","country":"USA","number":6,"race_name":"","time":"1970-01-01T00:00:00Z"}}',
    generated: 1,
    silk_base_url: 'drr38safykj6s.cloudfront.net',
  },
  venue_id: '562f0f79-ecf3-4c04-805c-4d074ab7965e',
  venue_name: 'Northfield Park',
  venue_state: 'OH',
  venue_country: 'USA',
};

describe('Race Component test', () => {
  test('Can render Race component', async () => {
    const now = Date.now() / 1000;
    const {meeting_name, race_number, advertised_start, race_id} = mockedRace;
    const {seconds: raceTime} = advertised_start;
    const countdown = Math.ceil(raceTime - now);
    const hasStarted = raceTime < now;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countdown={countdown}
        hasStarted={hasStarted}
      />,
    );
    await waitFor(() => {
      expect(screen.getByText(meeting_name)).toBeDefined();
    });
  });

  test('Can render Race component that Began', async () => {
    const now = Date.now() / 1000;
    const {meeting_name, race_number, advertised_start, race_id} = mockedRace;
    const {seconds: raceTime} = advertised_start;
    const countdown = Math.ceil(raceTime - now);
    const hasStarted = raceTime < now;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countdown={countdown}
        hasStarted={hasStarted}
      />,
    );
    await waitFor(() => {
      expect(screen.getByText('BEGAN')).toBeDefined();
    });
  });

  test('Can render Race component with 5 min to start', async () => {
    const now = Date.now() / 1000;
    const {meeting_name, race_number, race_id} = mockedRace;
    const raceTime = now + 300; // add 5 minutes to start
    const countdown = Math.ceil(raceTime - now);
    const hasStarted = raceTime < now;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countdown={countdown}
        hasStarted={hasStarted}
      />,
    );
    await waitFor(() => {
      expect(screen.getByText('5 min')).toBeDefined();
    });
  });

  test('Can render Race component and display seconds', async () => {
    const now = Date.now() / 1000;
    const {meeting_name, race_number, race_id} = mockedRace;
    const raceTime = now + 10; // add 70 seconds
    const countdown = Math.ceil(raceTime - now);
    const hasStarted = raceTime < now;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countdown={countdown}
        hasStarted={hasStarted}
      />,
    );
    await waitFor(() => {
      expect(screen.getByText('10 secs')).toBeDefined();
    });
  });
});
