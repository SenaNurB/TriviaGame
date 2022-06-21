import {StyleSheet, View} from 'react-native';
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
      setShowGameOverModal(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
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
      </View>

      <View style={styles.optionsContainer}>
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
      </View>

      <GameOverModal
        showGameOverModal={showGameOverModal}
        score={score}
        questionArray={questionArray}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    position: 'relative',
    paddingTop: 50,
  },
  questionContainer: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
  },
  optionsContainer: {
    flex: 3,
    borderRadius: 16,
    backgroundColor: Colors.background,
    paddingTop: 42,
    paddingHorizontal: 16,
  },
});

export default QuizScreen;
