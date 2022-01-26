// Libraries
import * as React from 'react';

// UI/Styles
import {Text, View} from 'react-native';
import styles from '../../styles/styles';

type Props = {
  name: string;
  number: number;
  countdown: number;
  hasStarted: boolean;
};

/**
 *
 * @param name race name
 * @param number race number
 * @param countdown countdown seconds to race start
 * @param hasStarted defines if the race has started
 */
const Race = ({name, number, countdown, hasStarted = false}: Props) => {
  const countDownTitle = (): string => {
    if (hasStarted) {
      return 'BEGAN';
    }
    return countdown > 60
      ? `${Math.ceil(countdown / 60)} min`
      : `${countdown} secs`;
  };
  return (
    <View style={styles.raceContainer}>
      <View>
        <View style={styles.raceLabelContainer}>
          <Text style={styles.raceItem}>{name}</Text>
        </View>
        <Text>Number: {number}</Text>
      </View>
      <View
        style={[
          hasStarted ? styles.raceStarted : styles.raceNext,
          styles.countdownContainer,
        ]}>
        <Text style={styles.countdownLabel}>{countDownTitle()}</Text>
      </View>
    </View>
  );
};

export default Race;
