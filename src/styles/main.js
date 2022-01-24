import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 800,
    color: 'white'
  },
  content: {
    margin: 10,
  },
  raceContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
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
  countdownContainer: {
    flex: 1,
  },
  countdownLabel: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 600,
    alignItems: 'center',
    padding: 10,
    minWidth: 80,
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
    fontSize: 25,
    fontWeight: 600,
  },
  picker: {
    height: 30,
  }
});

export default styles;