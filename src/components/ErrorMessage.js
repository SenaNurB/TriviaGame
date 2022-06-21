import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from './Text';

const ErrorMessage = ({message}) => {
  return (
    <View style={styles.container}>
      <Text align="center">{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    minHeight: 60,
  },
});

export default ErrorMessage;
