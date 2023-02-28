/* eslint-disable no-catch-shadow */
/* eslint-disable no-alert */
import React, {useMemo} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {storeData, getData} from '../../utlits/storage/async_storage';
import {validate} from '../../utlits/validation/mailValidation';
import {SignUpApi, SignInApi} from '../../api/user';
import Otp from '../bottom_sheets/OtpSheet';

export default class EmailForm extends React.Component {
  state = {
    email: '',
    password: '',
    showInputLabelForMail: false,
    showInputLabelForPassword: false,
    error: {
      emailError: false,
      passwordError: false,
      errorMsg: '',
    },
    onload: false,
    btmSheetVisble: false,
  };

  handleLabelChangeForMail = () => {
    this.setState({showInputLabelForMail: true});
  };

  handleLabelChangeForPassword = () => {
    this.setState({showInputLabelForPassword: true});
  };

  handleEmailValidation = () => {
    const {email} = this.state;
    if (email.length == 0) return;
    this.setState({
      error: {emailError: !validate(email), errorMsg: 'not valid email.'},
    });
  };

  handlePasswordValidation = () => {
    const {password} = this.state;
    if (password.length == 0) return;
    if (password.length < 6) {
      this.setState({
        error: {
          passwordError: true,
          errorMsg: 'password should be at least 7 characters',
        },
      });
    }
  };

  handleButton = async () => {
    const {buttonTxt} = this.props;
    buttonTxt === 'Sign Up'
      ? this.handleSignUpButton()
      : this.handleSignInButton();
  };

  handleSignUpButton = async () => {
    await this.handleEmailValidation();
    await this.handlePasswordValidation();
    const {email, password, error} = this.state;
    if (email.length === 0 || password.length === 0) {
      alert('email and password cannot be empty');
      return;
    }
    if (error.emailError || error.passwordError) {
      alert(error.errorMsg);
      return;
    }
    this.setState({onload: true});
    const fetchedData = await SignUpApi({
      full_name: 'vivek',
      email: email,
      password: password,
    });
    console.log('fetchedData', fetchedData);
    try {
      if (
        // fetchedData.data.status === 'Active' &&
        // fetchedData.status === 200 &&
        // !fetchedData.isVerified
        true
      ) {
        const {
          props: {navigation},
        } = this.props;
        this.setState({onload: false, btmSheetVisble: true});
        console.log(this.state.btmSheetVisble);
        // navigation.push('SignUpOTP');
      }
    } catch (error) {
      alert('email or password not valid');
      this.setState({onload: false});
    }
  };

  handleSignInButton = async () => {
    await this.handleEmailValidation();
    await this.handlePasswordValidation();
    const {email, password, error} = this.state;
    if (email.length === 0 || password.length === 0) {
      alert('email and password cannot be empty');
      return;
    }
    if (error.emailError || error.passwordError) {
      alert(error.errorMsg);
      return;
    }
    this.setState({onload: true});
    const fetchedData = await SignInApi({
      email: email,
      password: password,
    });
    // storeData(fetchedData);
    console.log('fetchedData', fetchedData);
    try {
      if (fetchedData.data.status === 'Active' && fetchedData.status === 200) {
        const {
          props: {navigation},
        } = this.props;
        this.setState({onload: false});
        navigation.push('Home');
      }
    } catch (error) {
      alert('email or password not valid');
      this.setState({onload: false});
    }
  };

  handleCloseBottomSheet = () => {
    this.setState({btmSheetVisble: false});
  };

  render() {
    const {
      showInputLabelForMail,
      showInputLabelForPassword,
      error,
      onload,
      btmSheetVisble,
    } = this.state;
    const {buttonTxt} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          {showInputLabelForMail && <Text style={styles.text}>Email</Text>}
          <TextInput
            placeholder="email"
            onChangeText={e => {
              this.setState({email: e});
            }}
            onFocus={this.handleLabelChangeForMail}
            onBlur={this.handleEmailValidation}
            style={styles.textInput}
          />
          {error.emailError && (
            <Text style={{color: '#df0000'}}> {error.errorMsg} </Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          {showInputLabelForPassword && (
            <Text style={styles.text}>Password</Text>
          )}

          <TextInput
            placeholder="password"
            onChangeText={e => {
              this.setState({password: e});
            }}
            onFocus={this.handleLabelChangeForPassword}
            onBlur={this.handlePasswordValidation}
            style={styles.textInput}
          />
          {error.passwordError && (
            <Text style={{color: 'red'}}>{error.errorMsg}</Text>
          )}
        </View>
        <TouchableOpacity onPress={this.handleButton}>
          <View style={styles.signUpButton}>
            {onload ? (
              <ActivityIndicator
                style={{marginVertical: 6}}
                animating={true}
                color="#1DA1F2"
              />
            ) : (
              <Text style={{marginVertical: 6, color: 'white'}}>
                {buttonTxt}
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Text style={[styles.text, {marginHorizontal: 150}]}>Or</Text>
        </View>
        <Otp isVisible={btmSheetVisble} close={this.handleCloseBottomSheet} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputContainer: {
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
