import React from 'react';
import SignIn from '../components/auth/SignIn';
import {SafeAreaView, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    console.log(e);
  }
};

export default class SignInScreen extends React.Component {
  async componentDidMount() {
    await storeData('vivek');
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
        <SignIn {...this.props} />
      </SafeAreaView>
    );
  }
}
