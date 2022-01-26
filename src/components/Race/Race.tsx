// Libraries
import * as React from 'react';

// UI/Styles
import {Text, View} from 'react-native';
import styles from '../../styles/styles';

type Props = {
  name: string;
  number: number;
  countdown: number;
  hasFinished: boolean;
};

const Race = ({name, number, countdown, hasFinished = false}: Props) => {
  const countDownTitle = (): string => {
    if (hasFinished) {
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
          hasFinished ? styles.raceStarted : styles.raceNext,
          styles.countdownContainer,
        ]}>
        <Text style={styles.countdownLabel}>{countDownTitle()}</Text>
      </View>
    </View>
  );
};

export default Race;
