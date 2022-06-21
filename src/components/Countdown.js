import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import useInterval from '@use-it/interval';

import Text from './Text';

import {Colors} from '../utils/Colors';

const Countdown = ({timeout = 1000, onComplete, currentQuestionIndex}) => {
  const [num, setNum] = useState(15);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setNum(15);
  }, [currentQuestionIndex]);

  useInterval(
    () => {
      if (num > 0) {
        setNum(s => s - 1);
      } else {
        setIsRunning(false);
        onComplete && onComplete();
      }
    },
    isRunning ? timeout : null,
  );

  const formatToDoubleDigit = value => ('0' + value).slice(-2);

  const seconds = formatToDoubleDigit(num % 60);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text color={Colors.white} align="center">
          {seconds}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 70,
  },
  innerContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: Colors.secondary,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Countdown;
