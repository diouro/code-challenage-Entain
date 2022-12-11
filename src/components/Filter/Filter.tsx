// Libraries
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// UI
// import {Picker} from '@react-native-picker/picker';
import styles, {COLOUR_ENTAIN, COLOUR_GREY_DARK} from '@src/styles/styles';

type Props = {
  selectedOption?: string | null | undefined;
  options: Array<{
    value: string;
    label: string;
  }>;
  onSelectOption: (value: string) => void;
};

/**
 *
 * Component to handle race filters picker
 *
 * @param selectedOption value selected by the user
 * @param options filter options for user selection
 * @param onSelectOption callback function
 *
 */
const Filter = ({selectedOption, options, onSelectOption}: Props) => {
  return (
    <View testID="filter-picker" style={styles.filterContainer}>
      {options.map(item => {
        const buttonStyle = [
          styles.filterButton,
          {
            backgroundColor:
              item.value === selectedOption ? COLOUR_ENTAIN : COLOUR_GREY_DARK,
          },
        ];
        return (
          <TouchableOpacity
            key={item.value}
            style={buttonStyle}
            onPress={() => onSelectOption(item.value)}>
            <Text style={styles.filterText}>
              {item.label?.replace(' Racing', '')}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Filter;
