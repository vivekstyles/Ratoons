import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// class Header extends React.Component {
//   render() {
//     const {firstLineText, secoundLineText, thirdLineText} = this.props;
//     return (
//       <View style={styles.container}>
//         {/* <Image
//           style={styles.image}
//           source={require('../../res/app_logo.png')}
//         /> */}
//         <View style={styles.headingContainer}>
//           <Text style={[styles.headingText, {fontSize: 40, color: 'white'}]}>
//             {firstLineText}
//           </Text>
//           <Text style={[styles.headingText, {fontSize: 40, color: 'white'}]}>
//             {secoundLineText}
//           </Text>
//           <Text style={[styles.headingText]}>{thirdLineText}</Text>
//         </View>
//       </View>
//     );
//   }
// }

const Signup = ({firstLineText, secoundLineText, thirdLineText}) => {
  return (
    <View style={styles.container}>
      {/* <Image
          style={styles.image}
          source={require('../../res/app_logo.png')}
        /> */}
      <View style={styles.headingContainer}>
        <Text style={[styles.headingText, {fontSize: 40, color: 'white'}]}>
          {firstLineText}
        </Text>
        <Text style={[styles.headingText, {fontSize: 40, color: 'white'}]}>
          {secoundLineText}
        </Text>
        <Text style={[styles.headingText]}>{thirdLineText}</Text>
      </View>
    </View>
  );
};

const Signin = ({firstLineText, secoundLineText, thirdLineText}) => {
  return (
    <View style={styles.container}>
      {/* <Image
          style={styles.image}
          source={require('../../res/app_logo.png')}
        /> */}
      <View style={styles.headingContainer}>
        <Text style={[styles.headingText, {fontSize: 40, color: 'white'}]}>
          {firstLineText}
        </Text>
        <Text style={[styles.headingText, {fontSize: 40, color: 'white'}]}>
          {secoundLineText}
        </Text>
        <Text style={[styles.headingText]}>{thirdLineText}</Text>
      </View>
    </View>
  );
};

const OtpHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <Text style={[styles.headingText, {fontSize: 20, color: 'white'}]}>
          Enter 6-digit code
        </Text>
        <Text style={[styles.headingText, {fontSize: 15, color: 'white'}]}>
          Your code was sent to +
        </Text>
        <Text style={[styles.headingText]}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 0,
    flexDirection: 'column',
    marginTop: 100,
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: 110,
  },
  headingContainer: {
    // backgroundColor: 'green',
    alignItems: 'flex-start',
    marginHorizontal: 30,
  },
  otpContainer: {
    // backgroundColor: 'green',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  headingText: {
    fontSize: 60,
    fontWeight: '800',
    fontStyle: 'italic',
    color: 'black',
  },
});

module.exports = function () {
  return {Signup, Signin, OtpHeader};
};
