import {StyleSheet, ImageBackground, View} from 'react-native';
import React, {useEffect} from 'react';

import Text from '../components/Text';

import {Colors} from '../utils/Colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SecondSplash');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/splash.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Welcome!</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: '50%',
  },
});
