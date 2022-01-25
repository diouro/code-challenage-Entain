// Libraries
import React from 'react';
import {PropTypes} from 'prop-types';

// UI
import {Picker} from '@react-native-picker/picker';
import styles from '../../styles/styles';

const Filter = ({selectedOption, options, onSelectOption, show}) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedOption}
      onValueChange={value => onSelectOption(value)}>
      {options.map(item => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};

Filter.propTypes = {
  selectedOption: PropTypes.string,
  options: PropTypes.array.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Filter.defaultProps = {
  selectedOption: '',
  show: false,
};

export default Filter;
