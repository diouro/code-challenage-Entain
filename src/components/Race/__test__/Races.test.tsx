import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import Races from '../Races';
import store from '@src/reducer/store';
import {Provider} from 'react-redux';

describe('Races Component test', () => {
  test('Can render Races component', async () => {
    render(
      <Provider store={store}>
        <Races />
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getByText('Next to Go')).toBeDefined();
    });
  });
});
