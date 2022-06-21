import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Option from '../components/Option';
import Question from '../components/Question';
import GameOverModal from '../components/GameOverModal';
import Countdown from '../components/Countdown';

import useQuestions from '../api/useQuestions';
import QuestionsArray from '../utils/QuestionsArray';

import {Colors} from '../utils/Colors';

const QuizScreen = ({route, navigation}) => {
  const {category, difficulty} = route.params;

  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);

  const {status, data: questions, error} = useQuestions(category, difficulty);

  if (status === 'loading') {
    return <Loading />;
  } else if (status === 'error') {
    return <ErrorMessage message={error.message} />;
  }

  const questionArray = QuestionsArray(questions);

  const validateAnswer = selectedOption => {
    let correct_option = questionArray[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption === correct_option) {
      setScore(score + 1);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setShowGameOverModal(true);
      }, 1000);
    }

    if (currentQuestionIndex === questionArray.length - 1) {
      // Last Question
      // Show Score Modal
      setShowGameOverModal(true);
    }
  };

  return (
    <SafeAreaView style={styles.areaContainer}>
      <View style={styles.container}>
        <Countdown
          currentQuestionIndex={currentQuestionIndex}
          onComplete={() => {
            setShowGameOverModal(true);
          }}
        />

        <Question
          currentQuestionIndex={currentQuestionIndex}
          questionArray={questionArray}
        />

        {questionArray[currentQuestionIndex]?.options.map((option, index) => (
          <Option
            data={option}
            currentOptionSelected={currentOptionSelected}
            correctOption={correctOption}
            isOptionsDisabled={isOptionsDisabled}
            onPress={() => validateAnswer(option)}
            key={index}
          />
        ))}
        <GameOverModal
          showGameOverModal={showGameOverModal}
          score={score}
          questionArray={questionArray}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: Colors.background,
    position: 'relative',
  },
});

export default QuizScreen;
