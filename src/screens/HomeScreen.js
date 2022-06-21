import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

import Picker from '../components/Picker';
import Button from '../components/Button';

import TriviaCategories from '../utils/TriviaCategories';
import Difficulty from '../utils/Difficulty';

import {Colors} from '../utils/Colors';

const HomeScreen = ({navigation}) => {
  const [difficulty, setDifficulty] = useState('easy');
  const [category, setCategory] = useState(9);

  const handleClick = () => {
    navigation.navigate('Quiz', {
      category: category,
      difficulty: difficulty,
    });
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <Text style={styles.header}>Trivia Game</Text>
        <Picker
          value={difficulty}
          setValue={setDifficulty}
          items={Difficulty}
        />
        <Picker
          value={category}
          setValue={setCategory}
          items={TriviaCategories}
        />
        <Button title="Start" onPress={handleClick} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  area: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 50,
  },
});
