// Libraries
import React from 'react';

// UI/Styles
import {Text, View} from 'react-native';
import {styles} from './styles';

interface RaceType {
  name: string;
  number: number;
  countDown: string;
}

/**
 *
 * @param name race name
 * @param number race number
 * @param countdown countdown seconds to race start
 */
const Race = ({name, number, countDown}: RaceType) => {
  return (
    <View style={styles.raceContainer}>
      <View>
        <Text style={styles.raceItem}>{name}</Text>
      </View>
      <View style={styles.raceLabelContainer}>
        <Text style={styles.countdownLabel}>{countDown}</Text>
        <Text style={styles.raceNumber}>R{number}</Text>
      </View>
    </View>
  );
};

export default Race;
