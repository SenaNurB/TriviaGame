import {StyleSheet, View, Modal} from 'react-native';
import React from 'react';

import Button from './Button';
import Text from './Text';

import {Colors} from '../utils/Colors';

const GameOverModal = ({
  showGameOverModal,
  score,
  questionArray,
  navigation,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showGameOverModal}>
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Text style={styles.header}>
            {score > questionArray.length / 2 ? 'Congratulations!' : 'Oops!'}
          </Text>
          <Text color={Colors.black} size={20}>
            Your Point : {score * 15}
          </Text>
          <View style={styles.scoreContainer}>
            <Text
              style={{
                fontSize: 30,
                color:
                  score > questionArray.length / 2
                    ? Colors.success
                    : Colors.error,
              }}>
              {score}
            </Text>
            <Text size={20} color="black">
              / {questionArray.length}
            </Text>
          </View>

          <Button
            title="Retry Quiz"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GameOverModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headContainer: {
    backgroundColor: Colors.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 8,
  },
});
