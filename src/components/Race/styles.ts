// Library
import {StyleSheet} from 'react-native';

// Constants
import {COLOUR_GREY} from '@src/constants';

export const styles = StyleSheet.create({
  raceContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.1,
  },
  raceLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  raceItem: {
    fontWeight: '500',
  },
  raceNumber: {
    fontSize: 12,
    borderRadius: 20,
    borderColor: COLOUR_GREY,
    borderWidth: 2,
    padding: 8,
  },
  countdownContainer: {
    flex: 1,
    maxWidth: 80,
  },
  countdownLabel: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    alignItems: 'center',
    padding: 8,
  },
});
