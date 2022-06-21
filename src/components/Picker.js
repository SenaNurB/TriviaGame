import {StyleSheet, View} from 'react-native';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import {Colors} from '../utils/Colors';

const Picker = ({setValue, items}) => {
  return (
    <View style={styles.picker}>
      <RNPickerSelect onValueChange={value => setValue(value)} items={items} />
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  picker: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    borderRadius: 16,
    width: '100%',
    height: '8%',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: Colors.white,
  },
});
