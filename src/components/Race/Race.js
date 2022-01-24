import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Text, View } from 'react-native';
import { selectNextRaces } from '../../selectors/racesSelector';
import styles from '../../styles/main';

const Race = ({ name, number, countdown, hasFinished }) => {
    const countDownTitle = () => {
        if (hasFinished) {
            return 'FT'
        }
        return countdown > 60 ? `${Math.ceil(countdown / 60)} min` : `${countdown} secs`;
    }
    return (
        <View style={styles.raceContainer}>
            <View>
                <View style={styles.raceLabelContainer}>
                    <Text style={styles.raceItem}>{name}</Text>
                </View>
                <Text>Number: {number}</Text>
            </View>
            <View style={{ backgroundColor: hasFinished ? 'red' : 'green', ...styles.countdownContainer }}>
                <Text style={styles.countdownLabel}>{countDownTitle()}</Text>
            </View>
        </View>
    )
}

Race.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    countdown: PropTypes.number.isRequired,
    hasFinished: PropTypes.bool,
}

Race.defaultProps = {
    hasFinished: false
}

export default Race;