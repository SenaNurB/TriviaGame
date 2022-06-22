import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async value => {
  try {
    await AsyncStorage.setItem('@score', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
