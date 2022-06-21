import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';

import {Colors} from '../utils/Colors';

const GameOverModal = ({
  showGameOverModal,
  score,
  questionArray,
  navigation,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={showGameOverModal}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: Colors.white,
            width: '90%',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            {score > questionArray.length / 2 ? 'Congratulations!' : 'Oops!'}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginVertical: 20,
            }}>
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
            <Text
              style={{
                fontSize: 20,
                color: Colors.black,
              }}>
              / {questionArray.length}
            </Text>
          </View>
          {/* Retry Quiz button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: Colors.accent,
              padding: 20,
              width: '100%',
              borderRadius: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: Colors.white,
                fontSize: 20,
              }}>
              Retry Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GameOverModal;

const styles = StyleSheet.create({});
