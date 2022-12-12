// Libraries
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';

// Component
import Race from '../Race';

// Mock
import {mockedRace} from './race.mock';

describe('Race Component test', () => {
  test('Can render Race component', async () => {
    const now = Date.now() / 1000;
    const {meeting_name, race_number, advertised_start, race_id} = mockedRace;
    const {seconds: raceTime} = advertised_start;
    const countdown = Math.ceil(raceTime - now);
    const countdownLabel =
      countdown > 60 ? `${Math.ceil(countdown / 60)} min` : `${countdown} secs`;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countDown={countdownLabel}
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
    const countdownLabel =
      countdown > 60 ? `${Math.ceil(countdown / 60)} min` : `${countdown} secs`;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countDown={countdownLabel}
      />,
    );
    await waitFor(() => {
      expect(screen.getByText(`${countdown} secs`)).toBeDefined();
    });
  });

  test('Can render Race component with 5 min to start', async () => {
    const now = Date.now() / 1000;
    const {meeting_name, race_number, race_id} = mockedRace;
    const raceTime = now + 300; // add 5 minutes to start
    const countdown = Math.ceil(raceTime - now);
    const countdownLabel =
      countdown > 60 ? `${Math.ceil(countdown / 60)} min` : `${countdown} secs`;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countDown={countdownLabel}
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
    const countdownLabel =
      countdown > 60 ? `${Math.ceil(countdown / 60)} min` : `${countdown} secs`;
    render(
      <Race
        key={race_id}
        name={meeting_name}
        number={race_number}
        countDown={countdownLabel}
      />,
    );
    await waitFor(() => {
      expect(screen.getByText('10 secs')).toBeDefined();
    });
  });
});
