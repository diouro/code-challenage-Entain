// Libraries
import React, {useCallback} from 'react';

// UI/Styles
import {Text, View} from 'react-native';
import styles from '@src/styles/styles';

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
  /**
   * Return the countdown either in minutes or seconds
   */
  const countDownTitle = useCallback((): string => {
    if (hasStarted) {
      return 'BEGAN';
    }
    return countdown > 60
      ? `${Math.ceil(countdown / 60)} min`
      : `${countdown} secs`;
  }, [hasStarted, countdown]);

  const textStyle = {
    ...styles.countdownLabel,
    ...(hasStarted ? styles.raceStarted : styles.raceNext),
  };

  return (
    <View style={styles.raceContainer}>
      <View>
        <View style={styles.raceLabelContainer}>
          <Text style={styles.raceItem}>{name}</Text>
        </View>
        <Text>Number: {number}</Text>
      </View>
      <Text style={textStyle}>{countDownTitle()}</Text>
    </View>
  );
};

export default Race;
