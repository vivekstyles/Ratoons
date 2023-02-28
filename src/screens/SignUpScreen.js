import React, {useRef, useMemo, useCallback} from 'react';
import SignUp from '../components/auth/SignUp';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BottomSheet, Button, ListItem} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Otp from '../components/bottom_sheets/OtpSheet';

const storeData = async value => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    console.log(e);
  }
};

export default class SignUpScreen extends React.Component {
  async componentDidMount() {
    await storeData('vivek');
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
        <SignUp {...this.props} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
