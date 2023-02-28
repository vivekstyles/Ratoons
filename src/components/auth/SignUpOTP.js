import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Header from './Header';
import LinearGradient from 'react-native-linear-gradient';

const {OtpHeader} = Header();
const screenSize = Dimensions.get('window');

export default class SignUpOTP extends React.Component {
  buttonOtp() {
    const onload = false;
    return (
      <View style={styles.inputContainer}>
        {/* {showInputLabelForPassword && <Text style={styles.text}>Password</Text>} */}

        <TextInput
          placeholder=""
          onChangeText={e => {
            this.setState({password: e});
          }}
          onFocus={this.handleLabelChangeForPassword}
          onBlur={this.handlePasswordValidation}
          style={styles.textInput}
        />
        {/* {error.passwordError && (
          <Text style={{color: 'red'}}>{error.errorMsg}</Text>
        )} */}
        <TouchableOpacity onPress={this.handleSignUpButton}>
          <View style={styles.signUpButton}>
            {onload ? (
              <ActivityIndicator
                style={{marginVertical: 6}}
                animating={true}
                color="#1DA1F2"
              />
            ) : (
              <Text style={{marginVertical: 6, color: 'white'}}>
                Verify OTP
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    const {navigation} = this.props;
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
                <OtpHeader />
              </View>
              {/* <EmailForm {...this} buttonTxt={'Sign In'} /> */}
              {this.buttonOtp()}
              <TouchableOpacity
                onPress={() => {
                  console.log(navigation);
                  navigation.goBack('SignUp');
                }}
                style={styles.loginArea}>
                <Text style={{color: 'black', fontWeight: '700'}}>
                  go back to
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    {' '}
                    Sign Up?
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
    // backgroundColor: 'green',
    // flex: 0,
    // flexDirection: 'column',
    // justifyContent: 'center',
    height: screenSize.height,
  },
  inputContainer: {
    // backgroundColor: 'pink',
    margin: 5,
    marginHorizontal: 30,
    padding: 5,
  },
  text: {
    color: 'ligthgrey',
    fontWeight: 'bold',
    margin: 2,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'darkgray',
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 40,
  },
  loginArea: {
    paddingHorizontal: 120,
  },
  signUpButton: {
    margin: 5,
    marginHorizontal: 35,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    height: 45,
  },
});
