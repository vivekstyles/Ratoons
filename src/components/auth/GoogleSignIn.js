import React from 'react';
import {View, StyleSheet} from 'react-native';
import {googleSignInApi, fetchData} from '../../api/user';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default class GoogleSignIn extends React.Component {
  state = {
    userInfo: {},
    isLoginScreenPresented: false,
    currentUser: '',
    user: '',
  };

  componentDidMount() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '942143449943-qd43mvlkgh0748dievi0hcol3u41p10c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      // openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      // profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
    console.log(this.state.userInfo);
  }

  signIn = async () => {
    // try {
    //   await GoogleSignin.hasPlayServices();
    //   const userInfo = await GoogleSignin.signIn();
    //   this.setState({userInfo});
    // } catch (error) {
    //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //     // user cancelled the login flow
    //     console.log('user cancelled the login flow');
    //     console.log(JSON.stringify(error));
    //   } else if (error.code === statusCodes.IN_PROGRESS) {
    //     // operation (e.g. sign in) is in progress already
    //     console.log('operation (e.g. sign in) is in progress already');
    //     console.log(JSON.stringify(error));
    //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //     // play services not available or outdated
    //     console.log('play services not available or outdated');
    //     console.log(JSON.stringify(error));
    //   } else {
    //     // some other error happened
    //     console.log(JSON.stringify(error));
    //   }
    // }

    // const data = await googleSignInApi(this.state.userInfo.user);
    // if (data.status) {
    if (true) {
      const {
        props: {navigation},
      } = this.props;
      navigation.replace('Home');
      // console.log(this.props.props);
      // console.log(navigation);
    }
  };

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    this.setState({isLoginScreenPresented: !isSignedIn});
  };

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    this.setState({currentUser});
  };

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      this.setState({user: null}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  revokeAccess = async () => {
    try {
      await GoogleSignin.revokeAccess();
      // Google Account disconnected from your app.
      // Perform clean-up actions, such as deleting data associated with the disconnected account.
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={styles.button}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={this.signIn}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 330,
    height: 50,
    borderRadius: 50,
  },
});
