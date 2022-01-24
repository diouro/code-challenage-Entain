import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Picker, View } from 'react-native';
import { getRaces } from '../../actions/api';
import { useDispatch, useSelector } from 'react-redux';
import { selectNextRaces } from '../../selectors/racesSelector';
import styles from '../../styles/main';

const Filter = ({ selected, options, onFilterSelected }) => {
    return (
        <Picker
            style={styles.picker}
            selectedValue={selected}
            onValueChange={(value) => onFilterSelected(value)}
        >
            {options.map(item => (
                <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
        </Picker>
    )
}

Filter.propTypes = {
    selected: PropTypes.string,
    options: PropTypes.array.isRequired,
    onFilterSelected: PropTypes.func.isRequired
}

Filter.defaultProps = {
    selected: '',
}

export default Filter;