// Libraries
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgb(168,48,237)',
    padding: 16,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 800,
    color: 'white'
  },
  content: {
    margin: 12,
  },
  raceContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.5,
    justifyContent: 'space-between',
    marginBottom: 8,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2
  },
  raceLabelContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  raceItem: {
    fontWeight: 700,
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
    fontWeight: 600,
    alignItems: 'center',
    padding: 8,
  },
  filter: {
    padding: 10,
  },
  noRacesContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 40,    
  },
  noRaces: {
    fontSize: 18,
    fontWeight: 600,
  },
  picker: {
    height: 30,
  }
});

export default styles;