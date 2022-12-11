import {AppRegistry} from 'react-native';
import App from '@src/components/App';
import {name as appName} from './app.json';

/**
 * Initiate the application
 */
AppRegistry.registerComponent(appName, () => App);
