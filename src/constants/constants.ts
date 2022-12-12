// Libraries
import {Platform} from 'react-native';

// Variables
export const LIMIT_RACES_DISPLAY_INDEX = 5;
export const UI_REFRESH_INTERVAL = 1 * 1000;
export const POLL_INTERVAL = 60 * 1000;
export const IS_IOS = Platform.OS === 'ios';

// COLOURS
export const COLOUR_ENTAIN = '#A830ED';
export const COLOUR_GREY = '#f5f5f5';
export const COLOUR_GREY_DARK = '#212121';

// Race types
export const FILTER_OPTIONS = [
  {label: 'All Races', value: ''},
  {label: 'Greyhound Racing', value: '9daef0d7-bf3c-4f50-921d-8e818c60fe61'},
  {label: 'Harness Racing', value: '161d9be2-e909-4326-8c2c-35ed71fb460b'},
  {label: 'Horse Racing', value: '4a2788f8-e825-4d36-9894-efd4baf1cfae'},
];
