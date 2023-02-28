import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {BottomSheet, Button, ListItem} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class Otp extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     const {isVisible} = props;
  //     this.state = {
  //       isVisible: isVisible,
  //     };
  //     console.log('constur', this.state);
  //   }
  state = {
    isVisible: false,
  };
  render() {
    console.log(this.props);
    const {isVisible, close} = this.props;
    console.log('hi', isVisible);
    return (
      <SafeAreaProvider>
        <BottomSheet modalProps={{}} isVisible={isVisible}>
          <View style={styles.container}>
            <Button
              title={'close'}
              icon={'person'}
              iconRight={true}
              onPress={() => close()}
            />
            <TextInput
              //   placeholder={placeholder}
              placeholderTextColor="red"
              style={styles.textInput}
              focusable={true}
              //   clearButtonMode="always"
              //   onChangeText={}
            />
          </View>
        </BottomSheet>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: 'lightgrey',
    border: 5,
  },
});

// export default Otp;
