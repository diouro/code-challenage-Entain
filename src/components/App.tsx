// Libraries
import React from 'react';
import {Provider} from 'react-redux';

// UI
import {View} from 'react-native';

// Reducer
import store from '@src/reducer/store';

// Styles
import styles from '@src/styles/styles';

// Components
import Races from '@src/components/Race/Races';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Races />
      </View>
    </Provider>
  );
}
