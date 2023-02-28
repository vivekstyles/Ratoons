import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import MainSearchBar from './MainSearchBar';

export default class FeedLayout extends React.Component {
  render() {
    return (
      <View>
        <MainSearchBar {...this.props} />
      </View>
    );
  }
}
