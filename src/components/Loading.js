import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {Colors} from '../utils/Colors';

const Loading = () => (
  <ActivityIndicator style={styles.container} color={Colors.white} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
