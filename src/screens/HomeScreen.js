// import React from 'react';
// import FeedLayout from '../components/feed/FeedLayout';
// import {SafeAreaView, StatusBar} from 'react-native';

// export default class HomeScreen extends React.Component {
//   render() {
//     // console.log(this.props);
//     // console.log('hi');
//     return (
//       <SafeAreaView>
//         <FeedLayout {...this.props} />
//       </SafeAreaView>
//     );
//   }
// }

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

// ...
export default class HomeScreen extends React.Component {
  render() {
    return <WebView source={{uri: 'https://reactnative.dev/'}} />;
  }
}
