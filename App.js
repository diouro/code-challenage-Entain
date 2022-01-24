import { View } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/reducer/store';
import styles from './src/styles/main';
import Races from './src/components/Race/Races';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Races style="auto" />
      </View>
    </Provider>
  );
}
