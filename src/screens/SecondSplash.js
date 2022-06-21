import {StyleSheet, ImageBackground, View} from 'react-native';
import React, {useEffect} from 'react';

const SecondSplash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/splash(1).jpeg')}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

export default SecondSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
