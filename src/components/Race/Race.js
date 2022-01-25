// Libraries
import React from 'react';
import {PropTypes} from 'prop-types';

// UI/Styles
import {Text, View} from 'react-native';
import styles from '../../styles/styles';

const Race = ({name, number, countdown, hasFinished}) => {
  const countDownTitle = () => {
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

Race.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  countdown: PropTypes.number.isRequired,
  hasFinished: PropTypes.bool,
};

Race.defaultProps = {
  hasFinished: false,
};

export default Race;
