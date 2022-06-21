import {StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';

import Picker from '../components/Picker';
import Button from '../components/Button';
import Text from '../components/Text';

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
        <View style={styles.difficulty}>
          <Text>Select Difficulty</Text>
        </View>

        <Picker
          value={difficulty}
          setValue={setDifficulty}
          items={Difficulty}
          text=""
        />
        <View style={styles.category}>
          <Text>Select Category</Text>
        </View>

        <Picker
          value={category}
          setValue={setCategory}
          items={TriviaCategories}
        />
        <View style={styles.button}>
          <Button title="Start" onPress={handleClick} />
        </View>
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
    fontSize: 42,
    fontWeight: 'bold',
    color: Colors.white,
    marginVertical: 50,
  },
  difficulty: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  category: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 20,
    paddingLeft: 8,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
  },
});
