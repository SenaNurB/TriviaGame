import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Option from '../components/Option';
import GameOverModal from '../components/GameOverModal';

import useQuestions from '../api/useQuestions';
import QuestionsArray from '../utils/QuestionsArray';

import {Colors} from '../utils/Colors';

const QuizScreen = ({route, navigation}) => {
  const {category, difficulty} = route.params;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showGameOverModal, setShowGameOverModal] = useState(false);

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
      // Set Score
      setScore(score + 1);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
      }, 1000);
    } else {
      setShowGameOverModal(true);
    }

    if (currentQuestionIndex === questionArray.length - 1) {
      // Last Question
      // Show Score Modal
      setShowGameOverModal(true);
    }
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}>
        {/* Question Counter */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{color: Colors.white, fontSize: 18, opacity: 0.6}}>
            / {questionArray.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: Colors.white,
            fontSize: 30,
          }}>
          {questionArray[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
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
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: Colors.background,
          position: 'relative',
        }}>
        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}
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

export default QuizScreen;
