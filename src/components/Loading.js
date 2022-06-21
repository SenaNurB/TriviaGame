import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => (
  <ActivityIndicator style={styles.container} color="white" />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
