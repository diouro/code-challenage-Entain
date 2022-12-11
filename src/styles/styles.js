// Libraries
import {StyleSheet} from 'react-native';

export const COLOUR_ENTAIN = 'rgb(168,48,237)';
export const COLOUR_GREY = '#f5f5f5';
export const COLOUR_GREY_DARK = '#212121';

const styles = StyleSheet.create({
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
    fontWeight: '800',
    color: 'white',
    alignSelf: 'center',
    alignContent: 'center',
  },
  content: {
    margin: 12,
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    width: 85,
    margin: 4,
    padding: 8,
    alignItems: 'center',
    borderRadius: 4,
  },
  filterText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  racesContainer: {
    marginTop: 10,
  },
  raceContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    marginBottom: 8,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.1,
  },
  raceLabelContainer: {
    flexDirection: 'row',
  },
  raceItem: {
    fontWeight: '700',
  },
  raceStarted: {
    color: 'orange',
  },
  raceNext: {
    color: 'green',
  },
  countdownContainer: {
    flex: 1,
    maxWidth: 80,
  },
  countdownLabel: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    alignItems: 'center',
    padding: 8,
  },
  noRacesContainer: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  noRaces: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
