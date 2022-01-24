// Libraries
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// UI
import { Picker, View } from 'react-native';
import styles from '../../styles/styles';

const Filter = ({ selectedOption, options, onSelectOption }) => {
    return (
        <Picker
            style={styles.picker}
            selectedValue={selectedOption}
            onValueChange={(value) => onSelectOption(value)}
        >
            {options.map(item => (
                <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
        </Picker>
    )
}

Filter.propTypes = {
    selectedOption: PropTypes.string,
    options: PropTypes.array.isRequired,
    onSelectOption: PropTypes.func.isRequired
}

Filter.defaultProps = {
    selectedOption: '',
}

export default Filter;