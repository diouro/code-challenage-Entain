import {renderHook} from '@testing-library/react-native';
import {useInterval} from '../useInterval';

describe('useInterval test', () => {
  test('Interval triggered once', async () => {
    const mockFunction = jest.fn();

    renderHook(() => {
      useInterval(mockFunction(), 1000);
    });

    expect(mockFunction).toBeCalledTimes(1);
  });

  test('Interval triggered trice', async () => {
    const mockFunction = jest.fn();

    const {rerender} = renderHook(() => {
      useInterval(mockFunction(), 1000);
    });

    rerender({});
    rerender({});

    expect(mockFunction).toBeCalledTimes(3);
  });
});
