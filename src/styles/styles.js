// Libraries
import {StyleSheet} from 'react-native';

const entainColor = 'rgb(168,48,237)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    minHeight: 80,
    backgroundColor: entainColor,
    justifyContent: 'center',
    paddingTop: 24,
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
  },
  filterContainer: {
    padding: 10,
  },
  filterText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
  },
  racesContainer: {
    marginTop: 10,
  },
  raceContainer: {
    flexDirection: 'row',
    padding: 12,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'space-between',
    marginBottom: 8,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  raceLabelContainer: {
    flexDirection: 'row',
  },
  raceItem: {
    fontWeight: '700',
  },
  raceStarted: {
    backgroundColor: 'orange',
  },
  raceNext: {
    backgroundColor: 'green',
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
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  noRaces: {
    fontSize: 18,
    fontWeight: '600',
  },
  picker: {
    alignContent: 'flex-end',
  },
});

export default styles;
