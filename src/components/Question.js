import {StyleSheet, View} from 'react-native';
import React from 'react';

import Text from './Text';

import {Colors} from '../utils/Colors';

const Question = ({currentQuestionIndex, questionArray}) => {
  return (
    <View style={styles.container}>
      {/* Question Counter */}
      <View style={styles.questionCounter}>
        <Text style={styles.counterText}>{currentQuestionIndex + 1}</Text>
        <Text style={styles.quizLength}>/ {questionArray.length}</Text>
      </View>

      {/* Question */}
      <Text style={styles.questionText}>
        {questionArray[currentQuestionIndex]?.question}
      </Text>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  questionCounter: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  counterText: {
    color: Colors.white,
    fontSize: 20,
    opacity: 0.6,
    marginRight: 2,
  },
  questionText: {
    color: Colors.white,
    fontSize: 30,
  },
  quizLength: {
    color: Colors.white,
    fontSize: 18,
    opacity: 0.6,
  },
});
