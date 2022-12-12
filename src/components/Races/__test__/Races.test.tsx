// Libraries
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';

// Reducer
import store from '@src/reducer/store';

// Components
import Races from '../Races';

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
