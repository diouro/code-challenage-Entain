// Libraries
import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';

// Constants
import {FILTER_OPTIONS} from '@src/constants';

// Component
import Filter from '../Filter';

describe('Filter Component test', () => {
  test('Can render Filter component', async () => {
    render(
      <Filter
        options={FILTER_OPTIONS}
        onSelectOption={jest.fn()}
        selectedOption=""
      />,
    );

    await waitFor(async () => {
      expect(screen.getByTestId('filter')).toBeDefined();
    });
  });

  test('Can render Filter component and select an option', async () => {
    const onPress = jest.fn();
    render(
      <Filter
        options={FILTER_OPTIONS}
        onSelectOption={onPress}
        selectedOption=""
      />,
    );

    await waitFor(async () => {
      expect(screen.getByTestId('filter')).toBeDefined();
    });

    fireEvent.press(screen.getByText('Greyhound'));
    expect(onPress).toBeCalledTimes(1);
  });
});
