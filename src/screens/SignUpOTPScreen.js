import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import SignUpOTP from '../components/auth/SignUpOTP';

export default class SignUpOTPScreen extends React.Component {
  render() {
    return (
      <View>
        <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
        <SignUpOTP {...this.props} />
      </View>
    );
  }
}
