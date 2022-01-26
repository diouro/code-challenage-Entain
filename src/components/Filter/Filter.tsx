// Libraries
import * as React from 'react';

// UI
import {Picker} from '@react-native-picker/picker';
import styles from '../../styles/styles';

type Props = {
  selectedOption: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  onSelectOption: (value: string) => any;
};

const Filter = ({selectedOption, options, onSelectOption}: Props) => {
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

export default Filter;
