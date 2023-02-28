import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Header from './Header';
import GoogleSignIn from './GoogleSignIn';
import EmailForm from './EmailForm';
import LinearGradient from 'react-native-linear-gradient';

const {Signin} = Header();
const screenSize = Dimensions.get('window');

export default class SignIn extends React.Component {
  render() {
    const {navigation} = this.props;
    console.log(navigation);
    return (
      (
        <StatusBar
          animated={true}
          backgroundColor="red"
          barStyle="dark-content"
          showHideTransition="none"
          hidden={true}
        />
      ),
      (
        <KeyboardAvoidingView behavior="padding">
          <LinearGradient colors={['#1Dc1F2', '#1DB1F2', '#1DA1F2']}>
            <View style={[styles.container]}>
              <View style={[styles.header]}>
                <Signin
                  firstLineText="Welcome Back"
                  secoundLineText="to"
                  thirdLineText="Ratoons"
                />
              </View>
              <EmailForm {...this} buttonTxt={'Sign In'} />
              <GoogleSignIn {...this} />
              <TouchableOpacity
                onPress={() => {
                  console.log(navigation);
                  navigation.push('SignUp');
                }}
                style={styles.loginArea}>
                <Text style={{color: 'white'}}>
                  Don't have an account?
                  <Text style={{color: 'black', fontWeight: '700'}}>
                    {' '}
                    Sign Up
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </KeyboardAvoidingView>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: screenSize.height,
    // backgroundColor: '#25D366'
  },
  loginArea: {
    paddingHorizontal: 90,
    paddingVertical: 5,
  },
  loginText: {},
  TextInput: {
    borderColor: 'black solid',
    borderBottomWidth: 1,
  },
});
