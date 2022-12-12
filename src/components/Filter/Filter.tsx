// Libraries
import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// UI
import {styles} from './styles';

// Constants
import {COLOUR_ENTAIN, COLOUR_GREY_DARK} from '@src/constants';

interface FilterType {
  selectedOption?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  onSelectOption: (value: string) => void;
}

/**
 *
 * Component to handle race filters
 *
 * @param selectedOption value selected by the user
 * @param options filter options for user selection
 * @param onSelectOption callback function
 *
 */
const Filter = ({selectedOption, options, onSelectOption}: FilterType) => {
  return (
    <View testID="filter" style={styles.container}>
      {options.map(item => {
        const buttonStyle = [
          styles.button,
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
            <Text style={styles.text}>
              {item.label?.replace(' Racing', '')}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Filter;
