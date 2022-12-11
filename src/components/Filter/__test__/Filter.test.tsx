import React from 'react';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import {FILTER_OPTIONS} from '@src/constants/contants';
import Filter from '../Filter';

describe('Filter Component test', () => {
  test('Can render Filter component', async () => {
    render(
      <Filter
        options={FILTER_OPTIONS}
        onSelectOption={jest.fn()}
        selectedOption="none"
      />,
    );

    await waitFor(async () => {
      expect(screen.getByTestId('filter-picker')).toBeDefined();
    });
  });

  test('Can render Filter component and select an option', async () => {
    const onPress = jest.fn();
    render(
      <Filter
        options={FILTER_OPTIONS}
        onSelectOption={onPress}
        selectedOption="none"
      />,
    );

    await waitFor(async () => {
      expect(screen.getByTestId('filter-picker')).toBeDefined();
    });

    fireEvent.press(screen.getByText('Greyhound'));
    expect(onPress).toBeCalledTimes(1);
  });
});
