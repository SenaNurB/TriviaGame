import {TouchableOpacity} from 'react-native';
import React from 'react';

import Text from './Text';

import {Colors} from '../utils/Colors';

const Option = ({
  data,
  onPress,
  currentOptionSelected,
  correctOption,
  isOptionsDisabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isOptionsDisabled}
      key={data}
      style={{
        borderWidth: 3,
        borderColor:
          data == correctOption
            ? Colors.success
            : data == currentOptionSelected
            ? Colors.error
            : Colors.secondary + '40',
        backgroundColor:
          data == correctOption
            ? Colors.success + '20'
            : data == currentOptionSelected
            ? Colors.error + '20'
            : Colors.secondary + '20',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
      }}>
      <Text size={20} color={Colors.white}>
        {data}
      </Text>
    </TouchableOpacity>
  );
};

export default Option;
