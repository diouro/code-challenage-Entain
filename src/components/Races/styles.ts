// Library
import {StyleSheet} from 'react-native';

// Constants
import {COLOUR_ENTAIN, COLOUR_GREY} from '@src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOUR_GREY,
  },
  statsBar: {
    height: 24,
    backgroundColor: COLOUR_ENTAIN,
  },
  header: {
    minHeight: 60,
    backgroundColor: COLOUR_ENTAIN,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    paddingTop: 12,
    alignSelf: 'center',
    alignContent: 'center',
  },
  content: {
    margin: 12,
    flex: 1,
  },
  racesContainer: {
    marginTop: 12,
  },
  noRacesContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  noRaces: {
    fontSize: 20,
    fontWeight: '600',
  },
});
