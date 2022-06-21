import {StyleSheet} from 'react-native';
import React from 'react';
import {Button as RNButton} from '@rneui/base';

const Button = ({isDisabled, isLoading, onPress, title}) => {
  return (
    <RNButton
      buttonStyle={styles.button}
      containerStyle={styles.container}
      titleStyle={styles.title}
      onPress={onPress}
      disabled={isDisabled}
      disabledStyle={styles.disabled}
      disabledTitleStyle={styles.disabledTitle}
      loading={isLoading}
      loadingProps={{color: 'white'}}
      title={title}
    />
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    minHeight: 50,
    marginTop: 10,
    width: '70%',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
  },
  disabled: {
    backgroundColor: 'black',
  },
  disabledTitle: {
    color: 'white',
    fontSize: 24,
  },
});
